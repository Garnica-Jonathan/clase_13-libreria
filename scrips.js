let Manga = [
    {
        nombre: `The Breakers`,
        genero: `accion`,
        tipo: `manhwa`,
        imagen: `http://d2r9epyceweg5n.cloudfront.net/stores/057/977/products/a04a42df-df62-11b5-58ca-50eb6c2ad67c1-c63880f5ee6cc1937516471370348018-640-0.jpg`

    },
    {
    
        nombre: `Swimming Lessons for a Mermaid`,
        genero: `comedia`,
        tipo: `manhwa`,
        imagen: `https://tumangas.net/assets_m/series/covers/6296237955c2d.jpg`

    },
    {
        nombre: `Dejare de ser Emperatriz`,
        genero: `Romance`,
        tipo: `manhwa`,
        imagen: `https://otakuteca.com/images/books/cover/5fc03ece5ce3f.jpg`
    },
    
]
let shop = []

if(localStorage.getItem("shop")){
    shop = JSON.parse(localStorage.getItem("shop"))
}else{
    localStorage.setItem("shop", JSON.stringify(shop))
}

const compra = document.getElementById("compras")
const carrito = document.getElementById("carrito")

carrito.addEventListener("click", () => {
    Swal.fire({
        title: 'cart',
        showCancelButton: true,
        confirmButtonText: 'Finalizar compra',

      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          Swal.fire('Compra Finalizada', '', 'success')
        }
      })
})

Manga.forEach((manga, indice) => {
    compra.innerHTML += `
    <div class="card mx-4" id="manga${indice}" style="width: 18rem;">
        <div>
            <img src="${manga.imagen}" class=" cataImagen " alt="...">
            <div class="card-body">
                <h5 class="card-title">${manga.nombre}</h5>
                <p class="card-text">${manga.genero}</p>
                <button class="btn btn-primary"><i class="fa-solid fa-cart-flatbed"></i></button>
            </div>
        </div>
    </div>
    `
})



Manga.forEach((manga, indice) => {
    document.getElementById(`manga${indice}`).lastElementChild.lastElementChild.addEventListener("click", () => {
        Toastify({
            text: "This is a toast",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "bottom", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    })
})

/*
for(let catalogoDeCompras of Manga){
    compra.innerHTML += `
    <div class="card mx-4" style="width: 18rem;">
        <img src="${catalogoDeCompras.imagen}" class=" cataImagen " alt="...">
        <div class="card-body">
            <h5 class="card-title">${catalogoDeCompras.nombre}</h5>
            <p class="card-text">${catalogoDeCompras.genero}</p>
            <button class="btn btn-primary">comprar</button>
        </div>
    </div>
    
    `
}*/


















