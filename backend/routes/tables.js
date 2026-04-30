const express = require('express');
const { query } = require('../db/oracle');
const auth = require('../middleware/auth');
const router = express.Router();

// Alle Tische holen
router.get('/', auth, async (req, res) => {
  const restRes = await query('SELECT id FROM restaurants WHERE user_id = :1', [req.userId]);
  const restaurantId = restRes.rows[0].ID;
  const tables = await query('SELECT * FROM restaurant_tables WHERE restaurant_id = :1 ORDER BY table_number', [restaurantId]);
  res.json(tables.rows);
});

// Tische generieren
router.post('/generate', auth, async (req, res) => {
  const count = req.body.count || 10;
  const restRes = await query('SELECT id FROM restaurants WHERE user_id = :1', [req.userId]);
  const restaurantId = restRes.rows[0].ID;

  // Alte Tische löschen
  await query('DELETE FROM restaurant_tables WHERE restaurant_id = :1', [restaurantId]);

  // Neue anlegen
  for (let i = 1; i <= count; i++) {
    await query(
      'INSERT INTO restaurant_tables (restaurant_id, table_number) VALUES (:1, :2)',
      [restaurantId, i]
    );
  }
  res.json({ message: count + ' Tische erstellt' });
});

module.exports = router;
