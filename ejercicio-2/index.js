const express = require("express")
const app = express()
const path = require("path")
const PORT = 3001

app.use(express.static(path.join(__dirname)));

app.get("/",(req,res)=>{
    res.send("Bienvendidoo")
})
app.get("/Productos",(req,res)=>{
    res.send("listado de productos")
})
app.post("/Productos",(req,res)=>{
    res.send("crear un producto")
})
app.put("/Productos",(req,res)=>{
    res.send("actualizar un producto")
})
app.delete("/Productos",(req,res)=>{
    res.send("borrar un producto")
})
app.get("/Usuarios",(req,res)=>{
    res.send("listado de usuarios")
})
app.post("/Usuarios",(req,res)=>{
    res.send("crear un usuario")
})
app.put("/Usuarios",(req,res)=>{
    res.send("actualizar un usuario")
})
app.delete("/Usuarios",(req,res)=>{
    res.send("borrar un usuario")
})



app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} `);
  });
  