require('dotenv').config();
const oracledb = require('oracledb');

// Wichtig: Wir erzwingen ipv4, da manche Netze bei ipv6-Versuchen blockieren
const dns = require('dns');
dns.setDefaultResultOrder('ipv4first');

async function run() {
  let connection;

  try {
    console.log("Versuche Verbindung zu:", process.env.DB_CONNECTIONSTRING ? "String gefunden" : "String fehlt!");

    connection = await oracledb.getConnection({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      connectionString: process.env.DB_CONNECTIONSTRING
    });

    console.log("✅✅✅ ERFOLG! Die Datenbank hat die Tür geöffnet.");
    
    const result = await connection.execute(`SELECT 'Datenbank bereit!' FROM dual`);
    console.log("DB-Bestätigung:", result.rows[0]);

  } catch (err) {
    console.error("❌ Verbindung fehlgeschlagen:");
    console.error("Fehlercode:", err.message);
    
    if (err.message.includes("NJS-511")) {
      console.log("\n💡 Analyse: Die Datenbank lehnt den 'Handschlag' ab.");
      console.log("Prüfe in deiner .env, ob im CONNECTIONSTRING wirklich 'tcps' (mit s!) steht.");
    }
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error(err);
      }
    }
  }
}

run();