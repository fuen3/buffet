//   AGREGANDO PRODUCTOS A LA CARTA VISIBLE //

 const Hamburgesas =[
    {
        title :"Triple kinga",
        price : 970,
        description : "Pan casero, tres medallones de carne, con triple cheddar, panceta y aderezo doble cuarto. Acompañado de papas fritas",
        id : 0,
    },
    {
        title : "Doble kinga",
        price : 850,
        description : "Pan casero, dos medallones de carne, con doble cheddar, panceta y aderezo doble cuarto. Acompañado de papas fritas",
        id : 1,
    },
    {
        title : "Tradicional",
         price :700,
        description : "Pan casero, un medallon de carne,jamon,queso,tomate y lechuga. Acompañada de papas fritas",
        id : 2,
    },
    {
        title :"Mini kinga",
        price : 700,
        description : "Pan casero, un medallon de carne con doble cheddar, panceta(opcional salsa doble cuarto).Acompañada de papas fritas",
        id : 3,
    },
    {
        title : "De la casa",
         price :  750,
        description : "Pan casero, medallon de carne, muzzarella, cebolla caramelizada y rucula. Acompañada de papas fritas",
        id : 4,
    },
    {
        title : "Criolla",
         price :  800,
        description : "Pan casero, un medallon de carne, queso provolone fundido, morrones y cebollas salteadas en aceite de ajos. Acompañado de papas fritas",
        id : 5,
    },
    {
        title :"Deluxe",
        price :900,
        description : "Pan casero, dos medallones de carne,doble cheddar,lechuga,tomate,panceta y alioli. Acompañado de papas fritas",
        id : 6,
    },
    {
        title : "Veggie Tradicional",
         price :  650,
        description : "Pan casero, dos medallones de carne, con doble cheddar, panceta y aderezo doble cuarto. Acompañado de papas fritas",
        id : 7,
    },
    {
        title : "Veggie de la casa",
         price :  700,
        description : "Pan casero, un medallon de carne,jamon,queso,tomate y lechuga. Acompañada de papas fritas",
        id : 8,
    },
    {
        title : "Veggie Criolla",
         price :  700,
        description : "Pan casero, un medallon de carne,jamon,queso,tomate y lechuga. Acompañada de papas fritas",
        id : 9,
    },
];
const Milanesas =[
    {
        title :"Clasica Completa",
        price :800,
        description : "Milanesa de ternera con jamon, queso, tomate y lechuga. Acompañada de papas fritas o ensalada",
        id : 10,
    },
    {
        title : "Napolitana",
         price :  850,
        description : "Milanesa de ternera, con salsa de tomate casera, muzzarela, jamón y orégano. Acompañado de papas fritas.",
        id : 11,
    },
    {
        title : "Fugazzeta",
         price :  850,
        description : "Milanesa de ternera con muzzarela, cebolla salteada y orégano. Acompañada de papas fritas",
        id : 12,
    },
    {
        title :"Cuatro quesos",
        price :850,
        description : "Milanesa de tenera con muzzarella, queso azul, provolone y queso parmesano. Acompañada de papas fritas o ensalada",
        id : 13,
    },
    {
        title : "Criminal",
         price :  950,
        description : "Milanesa de tenera, queso chedar, cebolla de verdeo, jamon, dos huevos fritos y pimenton dulce. Acompañada de papas fritas",
        id : 14,
    },
    {
        title : "Pollo Clasica",
         price :  800,
        description : "Milanesa de pollo con jamon, queso, lechuga y tomate. Acompañada de papas fritas",
        id : 15,
    },
    {
        title :"Pollo Fugazzeta",
        price : 850,
        description : "Milanesa de pollo, con salsa de tomate casera, muzzarela, jamón y orégano. Acompañado de papas fritas.",
        id : 16,
    },
    {
        title : "Pollo Cuatro Quesos",
         price :  850,
        description : "Milanesa de pollo con muzzarella, queso azul, provolone y queso parmesano. Acompañada de papas fritas o ensalada",
        id : 17,
    },
    {
        title : "Pollo napolitana",
         price :  850,
        description : "Milanesa de pollo, con salsa de tomate casera, muzzarela, jamón y orégano. Acompañado de papas fritas.",
        id : 18,
    },
    {
        title : "Pollo Criminal",
         price :  950,
        description : "Milanesa de pollo, queso chedar, cebolla de verdeo, jamon, dos huevos fritos y pimenton dulce. Acompañada de papas fritas",
        id : 19,
    },
];
const Pizzas =[
    {
        title :"Muzzarela",
        price : 650,
        description : "Salsa de tomate casera, muzzarella, oregano y aceitunas",
        id : 20,
    },
    {
        title : "Tomate y Albahaca",
         price :850,
        description : "Salsa de tomate casera, muzzarella, tomate en rodajas, albahaca y oregano",
        id : 21,
    },
    {
        title : "Tomate y ajo",
         price :  720,
        description : "Salsa de tomate casera, muzzarella, tomates en rodajas, ajo picado y oregano",
        id : 22,
    },
    {
        title :"Especial",
        price :780,
        description : "Salsa de tomate casera, muzzarella, jamon, morrones asados, aceitunas y oregano",
        id : 23,
    },
    {
        title : "Fugazzetta",
         price :  720,
        description : "Salsa de tomate casera, muzzarella, cebolla curada y oregano",
        id : 24,
    },
    {
        title : "Vegetales",
         price :  800,
        description : "Salsa de tomate casera, muzzarella, vegetales salteados y mix de semillas(zanahoria,cebolla,pimientos rojos y verdes, berenjena)",
        id : 25,
    },
    {
        title :"Calabreza",
        price :" 750",
        description : "Salsa de tomate casera, muzzarella y chorizo colorado",
        id : 26,
    },
    {
        title : "Cuatro Quesos",
         price :  750,
        description : "Salsa de tomate casera, muzzarella, provolone, queso azul y queso parmesano",
        id : 27,
    },
    {
        title : "Parmesano y Rucula",
         price : 800,
        description : "Salsa de tomate casera, muzzarella, rucula fresca, tomates cherry, queso parmesano y aceite de oliva",
        id : 28,
    }
];
function PintarPizzas(){
    const carta = document.querySelector("#pizzas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    Pizzas.forEach(producto =>{
        template1.querySelector(".title").textContent = `"${producto.title}"`
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}
function PintarMilanesas(){
    const carta = document.querySelector("#milanesas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
    Milanesas.forEach(producto =>{
        template1.querySelector(".title").textContent = `"${producto.title}"`
        template1.querySelector(".price").textContent = producto.price
        template1.querySelector("p").textContent = producto.description
        template1.querySelector(".btn-agregar").dataset.id = producto.id

        const clone = template1.cloneNode(true)
        fragment.appendChild(clone)
    })
    carta.appendChild(fragment)
}

function PintarBurger(){
    const carta = document.querySelector("#hamburgesas")
    const template1 = document.querySelector("#template-1").content
    const fragment = document.createDocumentFragment();
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

PintarBurger();
PintarMilanesas();
PintarPizzas();

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

