const express = require('express');
const router = express.Router();
const oracledb = require('oracledb');
const db = require('../db/oracle');
const auth = require('../middleware/auth'); // Falls du Login-Schutz nutzt

// 1. Gericht erstellen
router.post('/items', auth, async (req, res) => {
  const { restaurantId, categoryId, name, description, price, allergens } = req.body;
  let connection;
  
  try {
    connection = await db.getConnection();
    await connection.execute(
      `INSERT INTO MENU_ITEMS (RESTAURANT_ID, CATEGORY_ID, NAME, DESCRIPTION, PRICE, ALLERGENS, IS_AVAILABLE) 
       VALUES (:1, :2, :3, :4, :5, :6, 1)`,
      [restaurantId, categoryId, name, description, price, allergens || ''],
      { autoCommit: true } // WICHTIG: Ohne das speichert Oracle nicht dauerhaft!
    );
    res.json({ message: 'Gericht erfolgreich erstellt' });
  } catch (err) {
    console.error("Fehler beim Erstellen:", err);
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) await connection.close();
  }
});

// 2. Gericht löschen
router.delete('/items/:id', auth, async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection();
    await connection.execute(
      'DELETE FROM MENU_ITEMS WHERE ID = :1', 
      [req.params.id], 
      { autoCommit: true }
    );
    res.json({ message: 'Gericht gelöscht' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) await connection.close();
  }
});

// 3. Verfügbarkeit ändern (An/Aus Schalter)
router.patch('/items/:id/availability', auth, async (req, res) => {
  let connection;
  try {
    connection = await db.getConnection();
    const available = req.body.isAvailable ? 1 : 0; // Oracle nutzt 1/0 für Boolean
    await connection.execute(
      'UPDATE MENU_ITEMS SET IS_AVAILABLE = :1 WHERE ID = :2',
      [available, req.params.id],
      { autoCommit: true }
    );
    res.json({ message: 'Verfügbarkeit aktualisiert' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  } finally {
    if (connection) await connection.close();
  }
});

module.exports = router;