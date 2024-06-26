require("dotenv").config();


const express = require("express");

const app = express();

const path = require("path")
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json()); //capturamos el router post

app.use("/productos", require("./routes/productos.router"));

const PORT = process.env.PORT || 3001;

app.get("/", (req, res) => {
  res.send("Hola desde express!!")
})

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));