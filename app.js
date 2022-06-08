// AGREGANDO PRODUCTOS A LA CARTA VISIBLE //
document.addEventListener("DOMContentLoaded", () => {
    fetchData();
    if (localStorage.getItem("carrito")) {
        carrito = JSON.parse(localStorage.getItem("carrito"))
        agregarItemsCarrito()
    }
});
const fetchData = async () => {
    try {
        const res = await fetch("api.json")
        const data = await res.json()
        PintarPizzas(data)
        PintarBurger(data)
        PintarMilanesas(data)
    }
    catch (error) {
        console.log(error)
    }
}


// TEMPLATE ITEM CART //
const templateItemCart = document.getElementById("template-itemCart").content
const contenedorItems = document.getElementById("contenedorItems")
const fragment = document.createDocumentFragment();



function PintarPizzas(data) {
    const carta = document.querySelector("#pizzas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    const pizzas = data.filter(el => {
        return (el.category === "pizza")
    })
    pizzas.forEach(producto => {
        template1.querySelector(".title").textContent = producto.title
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id
        template1.querySelector(".cardComida").dataset.category = producto.category

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}
function PintarMilanesas(data) {
    const carta = document.querySelector("#milanesas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    const milanesas = data.filter(el => {
        return (el.category === "milanesa")
    })
    milanesas.forEach(producto => {
        template1.querySelector(".title").textContent = producto.title
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id
        template1.querySelector(".cardComida").dataset.category = producto.category

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}

function PintarBurger(data) {
    const carta = document.querySelector("#hamburgesas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    const Hamburgesas = data.filter(el => {
        return (el.category === "burger")
    })
    Hamburgesas.forEach(producto => {
        template1.querySelector(".title").textContent = producto.title
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id
        template1.querySelector(".cardComida").dataset.category = producto.category
        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}

// CARRITO DESPLEGABLE //

const btnCarritoDesplegar = document.getElementById("iconcart")
const divCarrito = document.getElementById("mostrarCart")
btnCarritoDesplegar.onclick = () => {
    divCarrito.classList.toggle("mostrar")
    document.getElementById("overlay").style.display = "block";
    btnCarritoDesplegar.style.display = "none";
}
const btnCarritoCerrar = document.getElementById("iconCerrar")
btnCarritoCerrar.onclick = () => {
    divCarrito.classList.toggle("mostrar")
    document.getElementById("overlay").style.display = "none";
    btnCarritoDesplegar.style.display = "block";
}

const overlay = document.getElementById("overlay")
overlay.onclick = () => {
    divCarrito.classList.toggle("mostrar")
    document.getElementById("overlay").style.display = "none";
    btnCarritoDesplegar.style.display = "block";
}

// FUNCIONALIDAD CARRITO //

let carrito = {};

const contenedorProductosCarta = document.getElementById("container")
contenedorProductosCarta.addEventListener("click", e => {
    elementoCapturado(e)
})

const elementoCapturado = e => {
    if (e.target.classList.contains("btn-agregar")) {
        setCarrito(e.target.parentElement)
        Toastify({
            text: "Producto agregado",
            duration: "1000",
            stopOnFocus: false,
            onClick: function () {
                divCarrito.classList.toggle("mostrar")
                document.getElementById("overlay").style.display = "block";
                btnCarritoDesplegar.style.display = "none";
            },
            style: {
                background: "linear-gradient(to right, #f5b952, #f7b441)",
            },
        }).showToast();
    }
    e.stopPropagation();
}

const setCarrito = objeto => {
    const producto = {
        id: objeto.querySelector(".btn-agregar").dataset.id,
        name: objeto.querySelector(".title").textContent,
        price: objeto.querySelector(".price").textContent,
        cantidad: 1
    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }
    carrito[producto.id] = { ...producto }
    agregarItemsCarrito();
}



const agregarItemsCarrito = () => {
    contenedorItems.innerHTML = "";
    Object.values(carrito).forEach(producto => {
        templateItemCart.querySelectorAll("td")[0].textContent = producto.name
        templateItemCart.querySelectorAll("td")[1].textContent = producto.cantidad
        templateItemCart.querySelector(".btn-info").dataset.id = producto.id
        templateItemCart.querySelector(".btn-danger").dataset.id = producto.id
        templateItemCart.querySelector("span").textContent = producto.price * producto.cantidad

        const clone = templateItemCart.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenedorItems.appendChild(fragment)

    pintarFooter()

    localStorage.setItem("carrito", JSON.stringify(carrito))

}


// FOOTER //

const templateFooter = document.getElementById("template-footer").content
const fragmentFooter = document.createDocumentFragment()
const footer = document.getElementById("footerTable")

const pintarFooter = () => {
    footer.innerHTML = ``
    if (Object.values(carrito).length === 0) {
        footer.innerHTML = `
        <td colspan="4">¡Carrito vacio! Comienze a comprar.</td>
        `
        return
    }
    const precioTotal = Object.values(carrito).reduce((acc, { cantidad, price }) => acc + cantidad * price, 0)
    templateFooter.querySelector("span").textContent = precioTotal

    const clone = templateFooter.cloneNode(true)
    fragmentFooter.appendChild(clone)

    footer.appendChild(fragmentFooter)
    const btnVaciar = document.getElementById("vaciar-carrito")
    btnVaciar.onclick = () => {
        carrito = {}
        localStorage.clear()
        contenedorItems.innerHTML = ""
        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = `
            <td colspan="4">¡Carrito vacio! Comienze a comprar.</td>
            `
        }
    }


    const btnFinalizar = document.getElementById("finalizar-compra")

    btnFinalizar.onclick = async () => {

        // delivery mensaje //
        function EnviarMsjDelivery() {
            let url = "https://api.whatsapp.com/send?phone=5492345414441&text=Nombre: %0A" + nombreForm + "%0A%0ADatos: %0A" + datosForm + "%0A%0APedido :%0A" + productos + "%0A" + "%0A%0AObservaciones :%0A" + observacionesForm + "%0A";
            window.open(url);
        }


        // CREANDO ARRAY PARA ENVIAR MSJ //


        let productos = new Array();
        Object.values(carrito).forEach(producto => {
            productos.push(producto.name)
            productos.push(producto.cantidad)
        })

        // ALERT DELIVERY //

        await Swal.fire({
            title: '¡Completa los datos para confirmar el pedido!',
            html:
                '<input id="swal-input1" class="swal2-input" placeholder="Nombre completo">' +
                '<input id="swal-input2" class="swal2-input" placeholder="Direccion para el envio">' +
                '<input id="swal-input3" class="swal2-input" placeholder="Observaciones">',

            focusConfirm: false,
            preConfirm: () => {
                return [
                    nombreForm = document.getElementById('swal-input1').value,
                    datosForm = document.getElementById('swal-input2').value,
                    observacionesForm = document.getElementById("swal-input3").value
                ]
            }
        })

        // VACIAR CARRITO //

        carrito = {}
        localStorage.clear()
        contenedorItems.innerHTML = ""
        if (Object.keys(carrito).length === 0) {
            footer.innerHTML = `
                           <td colspan="4">¡Carrito vacio! Comienze a comprar.</td>
                           `
        }
        EnviarMsjDelivery()
    }
}

// BOTONES DISMINUIR AUMENTAR  //

contenedorItems.addEventListener("click", e => {
    btnAccion(e)
})

const btnAccion = e => {
    if (e.target.classList.contains("btn-info")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad++
        carrito[e.target.dataset.id] = { ...producto }
        agregarItemsCarrito()
    }
    if (e.target.classList.contains("btn-danger")) {
        const producto = carrito[e.target.dataset.id]
        producto.cantidad--
        if (producto.cantidad === 0) {
            delete carrito[e.target.dataset.id]
        }
        agregarItemsCarrito()
    }

    e.stopPropagation()
}


// BOTON DE FILTRADO //
const contenedorCategorias = document.querySelectorAll(".contenedor-productos")
const tituloCarta = document.querySelectorAll(".titulo-carta")
const categorias = document.querySelectorAll("#categoria")
let categoriaActiva = null;

categorias.forEach((categoria) => {
    categoria.addEventListener("click", (e) => {
        categorias.forEach((elemento) => {
            elemento.classList.remove("btnActive")
        })
        e.currentTarget.classList.toggle("btnActive")
        categoriaActiva = categoria.dataset.category
        // activamos el contenedor  //

        contenedorCategorias.forEach((contenedor) => {
            if (contenedor.dataset.category === categoriaActiva) {
                contenedor.classList.add("activo")
            } else {
                contenedor.classList.remove("activo")
            }
        })
        tituloCarta.forEach((contenedor) => {
            contenedor.classList.remove("activoTitulo")
            if (contenedor.dataset.category === categoriaActiva) {
                contenedor.classList.add("activoTitulo")
            } else {
                contenedor.classList.remove("activoTitulo")
            }
        })

    })
})
