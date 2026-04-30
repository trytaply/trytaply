const express = require('express');
const { query } = require('../db/oracle');
const auth = require('../middleware/auth');
const router = express.Router();

// Neue Bestellung (Gast, kein Login)
router.post('/', async (req, res) => {
  const { restaurantSlug, tableNumber, items, note } = req.body;

  const restRes = await query('SELECT id FROM restaurants WHERE slug = :1', [restaurantSlug]);
  const restaurantId = restRes.rows[0].ID;

  // Preise aus DB holen (NIEMALS Frontend vertrauen!)
  let total = 0;
  const orderRes = await query(
    'INSERT INTO orders (restaurant_id, table_number, note, status) VALUES (:1,:2,:3,:4)',
    [restaurantId, tableNumber, note || '', 'pending']
  );
  const orderId = await query('SELECT MAX(id) AS ID FROM orders WHERE restaurant_id = :1', [restaurantId]);
  const oid = orderId.rows[0].ID;

  for (const item of items) {
    const itemRes = await query('SELECT name, price FROM menu_items WHERE id = :1', [item.menuItemId]);
    const dbItem = itemRes.rows[0];
    total += dbItem.PRICE * item.quantity;
    await query(
      'INSERT INTO order_items (order_id, menu_item_id, item_name, item_price, quantity) VALUES (:1,:2,:3,:4,:5)',
      [oid, item.menuItemId, dbItem.NAME, dbItem.PRICE, item.quantity]
    );
  }

  await query('UPDATE orders SET total = :1 WHERE id = :2', [total, oid]);
  res.json({ orderId: oid, total: total, message: 'Bestellung eingegangen!' });
});

// Aktive Bestellungen (für KDS)
router.get('/active', auth, async (req, res) => {
  const restRes = await query('SELECT id FROM restaurants WHERE user_id = :1', [req.userId]);
  const restaurantId = restRes.rows[0].ID;

  const orders = await query(
    'SELECT * FROM orders WHERE restaurant_id = :1 AND status IN (:2,:3) ORDER BY created_at',
    [restaurantId, 'pending', 'preparing']
  );

  const result = [];
  for (const order of orders.rows) {
    const itemsRes = await query('SELECT * FROM order_items WHERE order_id = :1', [order.ID]);
    result.push(Object.assign({}, order, { items: itemsRes.rows }));
  }
  res.json(result);
});

// Status ändern
router.patch('/:id/status', auth, async (req, res) => {
  await query('UPDATE orders SET status = :1 WHERE id = :2', [req.body.status, req.params.id]);
  res.json({ message: 'Status geaendert' });
});

module.exports = router;
