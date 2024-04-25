const express = require("express")
const app = express()
const PORT = 3001
app.use(express.json())

const productos = [
    { id: 1, nombre: 'Taza de Harry Potter' , precio: 300},
    { id: 2, nombre: 'FIFA 23 PS5' , precio: 1000},
    {  id: 3, nombre: 'Figura Goku Super Saiyan' , precio: 100},
    {  id: 4,  nombre: 'Zelda Breath of the Wild' , precio: 200},
    {  id: 5,  nombre: 'Skin Valorant' , precio: 120},
    {  id: 6, nombre: 'Taza de Star Wars' , precio: 220}
  ]

const objetoProductos = {
    description : "Productos",
    items : productos
}

app.get("/Productos",(req,res)=>{
    res.send(objetoProductos)
})

app.post("/Productos",(req,res)=>{
    const newObject = {
        id : productos.length + 1,
        nombre : req.body.nombre,
        precio : req.body.precio
    }
    productos.push(newObject)
    res.send(objetoProductos)
})

app.put("/Productos/id/:id",(req,res)=>{
    const found = productos.some(producto => producto.id == req.params.id)
    if (found) {
        productos.forEach(producto =>{
            if(producto.id == req.params.id){
                console.log(req.body);
                producto.nombre = req.body.nombre || producto.nombre
                producto.precio = req.body.precio || producto.precio
            }
        })
        res.send(productos)
    }else{
        res.status(404).send("No se encuentra la id")
    }
})

app.delete("/Productos/id/:id",(req,res)=>{
    const found = productos.some(producto => producto.id == req.params.id)
    if (found) {
        productos.forEach((producto,index)=>{
            if(producto.id == req.params.id){
                productos.splice(index,1)
            }
        })
        res.send(productos)
    }else{
        res.status(404).send("No se encuentra la id")
    }
})

app.get("/Productos/precio/:precio",(req,res)=>{
    const found = productos.some(producto => producto.precio == req.params.precio)
    if (found) {
        productos.forEach(producto=>{
            if(producto.precio == req.params.precio){
                res.send(producto)
            }
        })
    }else{
        res.status(404).send("No se encuentra la id")
    }
})

app.get("/Productos/entreNum",(req,res)=>{
    const newFilterArray = []
    productos.forEach(producto =>{
        if(producto.precio >= 50 && producto.precio <= 250){
            newFilterArray.push(producto)
        }
    })
    res.send(newFilterArray)
})

app.get("/Productos/id/:id",(req,res)=>{
    const found = productos.some(producto => producto.id == req.params.id)
    if (found) {
        productos.forEach(producto=>{
            if(producto.id == req.params.id){
                res.send(producto)
            }
        })
    }else{
        res.status(404).send("No se encuentra la id")
    }
})

app.get("/Productos/nombre/:nombre",(req,res)=>{
    const found = productos.some(producto => producto.nombre == req.params.nombre)
    if (found) {
        productos.forEach(producto=>{
            console.log("a");
            if(producto.nombre == req.params.nombre){
                res.send(producto)
            }
        })
    }else{
        res.status(404).send("No se encuentra el nombre")
    }
})


app.listen(PORT, () => {
    console.log(`Server started on port ${PORT} `);
  });