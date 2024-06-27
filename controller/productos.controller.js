const db = require("../db/db");   //ESTA ES LA CONEXION A LA BASE DE DATOS
  //PARA BUSCAR EN LA TABLA LO QUE NECESITAMOS
const index = (req, res) => {
 const sql = "SELECT * FROM productos";  //contempla si esta mal escrito aca
  db.query(sql, (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "error en la consulta" });
    }

    res.json(rows);
  });

};

const show = (req, res) => {
  //console.log(req.params.id);   //para recibir el parametro que le damos a la ruta

  const { id } = req.params;

  //hacer la consulta sql q necesitamos, ponemos signo ?, para evitar inyeccion de sql
  const sql = "SELECT * FROM productos WHERE id = ?"
  db.query(sql, [id], (error, rows) => {
    if (error) {
      return res.status(500).json({ error: "intente más tarde" });
    }

    //para devolver error si el id no existe
    if (rows.length == 0) {
      return res.status(404).json({error:"El producto no existe"})
    }

    //console.log(rows);  por si lo quiero ver en la terminal
    res.json(rows[0]); //con indice cero para que me devuelva sin el array
  });
};


const store = (req, res) => {
  const { nombre, stock, precio } = req.body;   //insertar estos datos en la base de datos
  const sql = "INSERT INTO productos (nombre, stock, precio) VALUES (?, ?, ?)";
  db.query(sql, [nombre, stock, precio], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "intente más tarde" });
    }
    const producto = { ...req.body, id: result.insertId };
    res.json(producto);
  
  });
};

const update = (req, res) => {
  const { id } = req.params;
  const { nombre, stock, precio } = req.body; 
  const sql = "UPDATE productos SET nombre = ?, stock = ?, precio = ? WHERE id = ?"
    db.query(sql, [nombre, precio, stock, id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "intente más tarde" });
    }
      if (result.affectedRows == 0) {    //si no se afectó ninguna fila es porque no existe el producto
        return res.status(404).json({ error: "El producto no existe" });
      };
        //para saber qué modificamos
      const producto = { ...req.body, ...req.params };
      res.json(producto);
   
  });
};

//MÉTODO delete
const destroy = (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM productos WHERE id = ? "
  db.query(sql, [id], (error, result) => {
    if (error) {
      return res.status(500).json({ error: "intente más tarde" });
    };
    if (result.affectedRows == 0) {    //si no se afectó ninguna fila es porque no existe el producto
      return res.status(404).json({ error: "El producto no existe" });
    };
    res.json({ mensaje: `Producto ${id} eliminado` });
  });
};


module.exports = {
  index,
  show,
  store,
  update,
  destroy
};