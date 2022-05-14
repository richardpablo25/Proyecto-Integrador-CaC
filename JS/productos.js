// Lista de productos a mostrar
// Array formato JSON 

const productos = [
    {
        id: 1,
        nombre: "Computadora Intel I3",
        img: "../imagenes/Pc1.jpg",
        precio: 100,
        descripcion: "Pc Intel I3",
        stock: 10
    },
    {
        id: 2,
        nombre: "Computadora Intel I5",
        img: "../imagenes/Pc2.jpg",
        precio: 150,
        descripcion: "Pc Intel I5",
        stock: 10  
    },
    {
        id: 3,
        nombre: "Impresora Canon",
        img: "../imagenes/canon.jpg",
        precio: 100,
        descripcion: "Impresora a color multifunción Canon Pixma G3110 con wifi negra 110V/220V",
        stock: 10
    },
    {
        id: 4,
        nombre: "Impresora HP",
        img: "../imagenes/hp.jpg",
        precio: 100,
        descripcion: "Impresora a color multifunción HP Deskjet Ink Advantage 2775 con wifi blanca 100V/240V",
        stock: 10
    }

];
// obtengo etiqueta products desde html
const products =document.getElementById("products");


const generarcards =(productos) => {
    // obtenemos el div que contendra las cards de productos
    const cards =document.getElementById("products");
    
    cards.classList ="container-fluid";

    const card =document.createElement("div");
    card.className="card";
    
}

productos.forEach(producto => {

    let cardProductos =document.createElement("div");
    cardProductos.className ="card";

    //creamos una plantilla que es un string
    let card = `
        
            <div class="card-body">
                <h4 class="card-text">${producto.nombre}</h4>
            </div>
                <img src="${producto.img}" alt="Card image" width="200px" height="100px">
            <div class="card-body">
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">${producto.precio}</p>
            </div>
            <a href="#" class="btn btn-primary" onclick="agregarProducto()">Agregar al Carrito </a>       
    `;
    // pasamos el card de string a nodo
    cardProductos.innerHTML = card;

    // agregamos 
    products.appendChild(cardProductos);

    
});
 
 generarcards(productos);