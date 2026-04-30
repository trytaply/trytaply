const oracledb = require('oracledb');
const path = require('path');

// Wallet-Pfad setzen
process.env.TNS_ADMIN = path.join(__dirname, '..', 'wallet');

let pool;

async function initialize() {
  pool = await oracledb.createPool({
    user: 'ADMIN',
    password: process.env.ORACLE_PASSWORD,
    connectString: process.env.ORACLE_CONNECT_STRING,
    poolMin: 2,
    poolMax: 10,
  });
  console.log('Oracle DB verbunden!');
}

async function query(sql, params) {
  params = params || [];
  const conn = await pool.getConnection();
  try {
    const result = await conn.execute(sql, params, {
      outFormat: oracledb.OUT_FORMAT_OBJECT
    });
    await conn.commit();
    return result;
  } finally {
    await conn.close();
  }
}

module.exports = { initialize, query };
