// clearDB
const mysql = require('mysql');


const pool = mysql.createPool({
  connectionLimit: 10,
  // ----- local DB by Docker -----
  // host: "127.0.0.1",
  // user: "root",
  // password: "root",
  // database: "lineBotDB",
  // ---- Heroku clear DB -----
  host: process.env.CLEAR_DB_HOST,
  user: process.env.CLEAR_DB_USER,
  password: process.env.CLEAR_DB_PASSWORD,
  database: process.env.CLEAR_DB_DATABASE,
});

function query(sql, value) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function(err, connection) {
      if (err) {
        reject(err);
      } else {
        connection.query(sql, value, (err, rows) => {
          if (err) {
            reject(err);
          } else {
            resolve(rows);
            console.log('[DB Result]', rows);
          }
          connection.release();
        });
      }
    });
  });
};


module.exports = { query };
