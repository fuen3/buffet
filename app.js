//   AGREGANDO PRODUCTOS A LA CARTA VISIBLE //
fetch("api.json"
).then(Response => Response.json()
).then(data =>{ 
    PintarPizzas(data)
    PintarBurger(data)
    PintarMilanesas(data)
})


function PintarPizzas(data){
    const carta = document.querySelector("#pizzas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    const pizzas = data.filter(el =>{
        return (el.category === "pizza")
    })
    pizzas.forEach(producto =>{
        template1.querySelector(".title").textContent = `"${producto.title}"`
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}
function PintarMilanesas(data){
    const carta = document.querySelector("#milanesas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    const milanesas = data.filter(el =>{
        return (el.category === "milanesa")
    })
    milanesas.forEach(producto =>{
        template1.querySelector(".title").textContent = `"${producto.title}"`
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}

function PintarBurger(data){
    const carta = document.querySelector("#hamburgesas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    const Hamburgesas = data.filter(el =>{
        return (el.category === "burger")
    })
    Hamburgesas.forEach(producto =>{
        template1.querySelector(".title").textContent = `"${producto.title}"`
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}


// CARRITO //
let carrito = [];
const contenedorComida = document.getElementById("container")


contenedorComida.addEventListener("click", (e) =>{
    if(e.target.classList.contains("btn-agregar")) {
        setCarrito(e.target.parentElement)
        Toastify({
            text: "Producto agregado al carrito",
            duration: 1500,
            close: true,
            gravity: "top", 
            position: "right", 
            style: {
              background: "linear-gradient(to right, #f5b952, #f5b952)",
            },
            onClick: function(){} 
          }).showToast();
    }
    e.stopPropagation()
})

const setCarrito = objeto =>{
    const producto ={
        id: objeto.querySelector(".btn-agregar").dataset.id,
        title: objeto.querySelector(".title").textContent,
        price: objeto.querySelector(".price").textContent,
        cantidad: 1
    }
    if(carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = {...producto}
    pintarCarrito()
}

const templateCarrito = document.getElementById('template-carrito').content
const items = document.getElementById("items")
const fragmentCarrito = document.createDocumentFragment()

const pintarCarrito = () =>{

    Object.values(carrito).forEach(producto =>{
        items.innerHTML = "";
        templateCarrito.querySelector("th").textContent = producto.id
        templateCarrito.querySelectorAll("td")[0].textContent = producto.title
        templateCarrito.querySelectorAll("td")[1].textContent = producto.cantidad
        templateCarrito.querySelector("span").textContent = producto.cantidad * producto.price

        templateCarrito.querySelector(".btn-info").dataset.id = producto.id
        templateCarrito.querySelector(".btn-danger").dataset.id = producto.id

        const clone = templateCarrito.cloneNode(true)
        fragmentCarrito.appendChild(clone)
    })
    items.appendChild(fragmentCarrito)

    pintarFooter()
}


const footer = document.getElementById("footer")
const templateFooter = document.getElementById("template-footer").content
const fragmentFt = document.createDocumentFragment()

const pintarFooter = () =>{
    footer.innerHTML = ""

    if (Object.keys(carrito).length === 0) {
        footer.innerHTML = `
        <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
        `
        return
    }
    const cantidadTotal = Object.values(carrito).reduce((acc,{cantidad}) => acc + cantidad,0)
    const precioTotal = Object.values(carrito).reduce((acc,{cantidad,price}) => acc + cantidad * price,0)

    templateFooter.querySelectorAll("td")[0].textContent = cantidadTotal
    templateFooter.querySelector("span").textContent = precioTotal

    const clone = templateFooter.cloneNode(true)
    fragmentFt.appendChild(clone)

    footer.appendChild(fragmentFt)
    const btnFinalizar = document.getElementById("finalizar-compra")
    const btnVaciar = document.getElementById("vaciar-carrito")
    btnVaciar.addEventListener("click", () =>{
        swal({
            title: "Carrito vacio",
            text:``,
            icon: "warning",
            button:"Ok"
          });
        carrito = {}
        items.innerHTML=""
        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = `
            <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
            `
            
        }
    })
    btnFinalizar.addEventListener("click", () =>{
        swal({
            title: "Muchas gracias por elegirnos",
            text:``,
            icon: "success",
            button:"Ok"
          });
          carrito = {}
          items.innerHTML=""
          footer.innerHTML = `
          <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>`
    })
}
cards.addEventListener('click', e => { addCarrito(e) });
items.addEventListener('click', e => { btnAumentarDisminuir(e) })
const btnAumentarDisminuir = e => {

    if (e.target.classList.contains('btn-info')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        pintarCarrito()
    }

    if (e.target.classList.contains('btn-danger')) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            carrito = {}
            items.innerHTML=""
            if (Object.keys(carrito).length === 0) {
                footer.innerHTML = `
                <th scope="row" colspan="5">Carrito vacío - comience a comprar!</th>
                `
                
            }
        } else {
            carrito[e.target.dataset.id] = {...producto}
        }
        pintarCarrito()
    }
    e.stopPropagation()
}

// BOTONES FILTRADO //

