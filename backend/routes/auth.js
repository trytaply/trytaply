const express = require('express');
const bcrypt  = require('bcryptjs');
const jwt     = require('jsonwebtoken');
const { query } = require('../db/oracle');
const router = express.Router();

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { email, password, restaurantName } = req.body;
    const hash = await bcrypt.hash(password, 10);

    // 1. User speichern
    await query(
      'INSERT INTO users (email, password_hash) VALUES (:1, :2)',
      [email, hash]
    );

    // 2. User-ID holen
    const userRow = await query(
      'SELECT id FROM users WHERE email = :1', [email]
    );
    const userId = userRow.rows[0].ID;

    // 3. Slug generieren und Restaurant anlegen
    // Tipp: Hänge eine Zufallszahl an den Slug, falls der Name schon existiert
    const slug = restaurantName.toLowerCase().replace(/[^a-z0-9]/g, '-') + '-' + Math.floor(Math.random() * 1000);

    await query(
      'INSERT INTO restaurants (user_id, name, slug) VALUES (:1, :2, :3)',
      [userId, restaurantName, slug]
    );

    const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '30d' });
    res.json({ token, message: 'Account erstellt!' });

  } catch (error) {
    console.error("Registrierungsfehler:", error);
    res.status(500).json({ error: 'Registrierung fehlgeschlagen. E-Mail oder Restaurant-Name bereits vergeben.' });
  }
});

// LOGIN
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const result = await query('SELECT * FROM users WHERE email = :1', [email]);
  const user = result.rows[0];
  if (!user) return res.status(401).json({ error: 'E-Mail nicht gefunden' });

  const valid = await bcrypt.compare(password, user.PASSWORD_HASH);
    if (!valid) return res.status(401).json({ error: 'Falsches Passwort' });

  const token = jwt.sign({ userId: user.ID }, process.env.JWT_SECRET, { expiresIn: '30d' });
  res.json({ token });
});

module.exports = router;
