const express = require("express");
const router = express.Router(); 

const controller = require("..//controller/productos.controller")

router.get("/", controller.index);


router.get("/:id", controller.show);

 // en el caso de hacerlo sin base de datos
//   (req, res) => {
//   console.log(req.params.id);   //para recibir el parametro que le damos a la ruta
//   const producto = productos.find((elemento) => elemento.id == req.params.id)
//   //tambien debo contemplar si no existe un producto con el id que me piden
//   if (!producto) {
//     return res.status(404).json({error: "No existe el producto"})
//   }

//   res.send(producto);
// });


//METODO POST. Debemos para capturar la informacion(desde el index.js)


router.post("/", controller.store);
  //EN EL CASO DE HACERLO SIN BASE DE DATOS
//   (req, res) => {
//   //console.log(req.body); me sirve para ver que agregué en el body en postman
//   const producto = {
//     id: productos.length + 1,
//     nombre: req.body.nombre,     //para agregar un producto que viene del body de postman
//     stock: req.body.stock,
//   };
//   productos.push(producto);
//   res.send(producto)
// })

router.put("/:id",controller.update)
    //EN EL CASO DE HACERLO SIN BASE DE DATOS
//   (req, res) => {
//   //console.log(req.params); es lo que obtengo de los parametros que me dan en postamn(representan el id)
//   //console.log(req.body); lo que obtengo de los datos del body de postman

//   //tambien debo contemplar si no existe un producto con el id que me piden
//   const producto = productos.find((elemento) => elemento.id == req.params.id)  
//   if (!producto) {
//     return res.status(404).json({ error: "No existe el producto" })
//   };
//   producto.nombre = req.body.nombre;
//   producto.stock = req.body.stock;
//   res.send(producto);
// })

router.delete("/:id", controller.destroy);

  //EN CASO DE HACERLO SIN BASE DE DATOS
//   (req, res) => {
// const producto = productos.find ((elemento) => elemento.id == req.params.id);
//  if (!producto) {
//     return res.status(404).json({ error: "No existe el producto" })
//   };
//  const productoIndex = productos.findIndex(            //buscamos el elemento del array desde el indice
//    (elemento) => elemento.id == req.params.id);
//   //se puede hacer asi
//   //productos.splice(productoIndex, 1)
//   //res.json(producto)
// //o así
//   const deleteProducto = productos.splice(productoIndex, 1);
//   res.json(deleteProducto)
// })

module.exports = router; //debe estar al final
