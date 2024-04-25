const productos = []


axios.get("http://localhost:3001/Productos")
    
.then((product) => {
    productos = product.data
})
 .catch((err) => console.error(err));

 function mostrarProductos(){
    productos.forEach(product => {
        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
        <p>${product}</p>`
     })
    document.body.appendChild(productos)
}

mostrarProductos()