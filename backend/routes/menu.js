const express = require('express');
const { query } = require('../db/oracle');
const auth = require('../middleware/auth');
const router = express.Router();

// ÖFFENTLICH: Speisekarte direkt laden
router.get('/', async (req, res) => {
  try {
    // Hier einfach deine echte Tabelle abfragen
    const items = await query('SELECT * FROM menu_items'); 
    res.json(items.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Die POST-Methoden (Kategorie/Gericht hinzufügen) unten drunter 
// müssen auch angepasst werden, falls sie "restaurant_id" nutzen wollen!
// Wenn du keine Restaurants hast, lösche die Zeilen mit restRes/restaurantId einfach raus.

module.exports = router;
// Kategorie hinzufügen (Login nötig)
router.post('/categories', auth, async (req, res) => {
  const restRes = await query('SELECT id FROM restaurants WHERE user_id = :1', [req.userId]);
  const restaurantId = restRes.rows[0].ID;
  await query('INSERT INTO menu_categories (restaurant_id, name) VALUES (:1, :2)', [restaurantId, req.body.name]);
  res.json({ message: 'Kategorie erstellt' });
});

// Gericht hinzufügen
router.post('/items', auth, async (req, res) => {
  const { categoryId, name, description, price, allergens } = req.body;
  const restRes = await query('SELECT id FROM restaurants WHERE user_id = :1', [req.userId]);
  const restaurantId = restRes.rows[0].ID;
  await query(
    'INSERT INTO menu_items (restaurant_id, category_id, name, description, price, allergens) VALUES (:1,:2,:3,:4,:5,:6)',
      [restaurantId, categoryId, name, description, price, allergens || '']
  );
  res.json({ message: 'Gericht erstellt' });
});

// Gericht löschen
router.delete('/items/:id', auth, async (req, res) => {
  await query('DELETE FROM menu_items WHERE id = :1', [req.params.id]);
  res.json({ message: 'Gelöscht' });
});

// Verfügbarkeit ändern
router.patch('/items/:id/availability', auth, async (req, res) => {
  await query('UPDATE menu_items SET is_available = :1 WHERE id = :2', [req.body.isAvailable ? 1 : 0, req.params.id]);
  res.json({ message: 'Aktualisiert' });
});

module.exports = router;
