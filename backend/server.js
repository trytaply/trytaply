require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initialize } = require('./db/oracle');

const app = express();
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());

app.use('/api/auth',        require('./routes/auth'));
app.use('/api/menu',        require('./routes/menu'));
app.use('/api/tables',      require('./routes/tables'));
app.use('/api/orders',      require('./routes/orders'));
//app.use('/api/restaurants', require('./routes/restaurants'));

app.get('/health', (req, res) => res.json({ status: 'ok' }));

async function start() {
  await initialize();
  app.listen(process.env.PORT, () => {
    console.log('Server laeuft auf Port ' + process.env.PORT);
  });
}

start();
