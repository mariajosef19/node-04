const db = require("../db/db");   //ESTA ES LA CONEXION A LA BASE DE DATOS
  //PARA BUSCAR EN LA TABLA LO QUE NECESITAMOS
const index = (req, res) => {
 const sql = "SELECT * FROM PRODUCTOS";  //contempla si esta mal escrito aca
  db.query(sql, (error, rows) => {
    if (error) {
      res.status(500).json({ error: "error en la consulta" });
    }

    res.json(rows);
  });

};


// const show = (req, res) => {
  
// }

module.exports = {
  index,
};