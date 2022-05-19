// PASOS

// Obtener el evento onclick del usuario en los botones agregar al carrito

// En el evento, agregar el producto seleccionado al array del carrito

// Obtenemos los datos del carrito
carrito = [];

// Validamos que tenemos datos en el carrito en el storage
if (localStorage.getItem("Carrito")) {
    carrito = JSON.parse(localStorage.getItem("Carrito"));
}

const generarCards = (productos) => {
    // Obtenemos el div que contendra las cards de productos
    let cards = document.getElementById("carrito");

    let total = 0;
    
    productos.forEach( producto => {
        
        total += producto.precio;  

        // Creamos la etiqueta Card
        let cardNueva = document.createElement ("div");
        cardNueva.className = "card m-3";
        let card = `
            <div class="card-body">
                <h4 class="card-text">${producto.nombre}</h4>
            </div>
            <img src="${producto.img}" alt="Card image" width="200px" height="100px">
            <div class="card-body">
                <p class="card-text">${producto.descripcion}</p>
                <p class="card-text">Precio $ ${producto.precio}</p>
            </div>
                <a class="btn btn-primary" id="cart${producto.id}">Eliminar</a>
            </div>
        `;
        cardNueva.innerHTML =card;
        cards.appendChild(cardNueva);
        
        let productCard = document.getElementById("cart" + producto.id);

        productCard.addEventListener("click", (evento)=>{
            evento.preventDefault();
            carrito.splice(producto.id - 1, 1);
        });


    });
    
}

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});

generarCards(carrito);

/*
const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    localStorage.setItem("Carrito", JSON.stringify(carrito));
});
*/
    

   

