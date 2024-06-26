const mysql = require("mysql2")

const connection = mysql.createConnection({
  host: process.env.DB_HOST,     // ANTES "localhost",
  user: process.env.DB_USER,     // ANTES "root",
  password: process.env.DB_PASS, // ANTES "",
  database: process.env.DB_NAME, //ANTES "cac"
});

connection.connect((error) => {
  if (error) {
    return console.error(error);
  }
  console.log("Conectado")
});

module.exports = connection;