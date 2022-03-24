// import { guardar } from "../modules/guardar.js";
import { compra } from "../modules/compra.js";
import { showCards } from "../modules/showCard.js";

let contenCombos = document.getElementById('containerCard');
let conteResul = document.getElementById('resultado')
let btnPerros = document.getElementById('perros');
let btnCombos = document.getElementById('combos');
let btnHamburguesas = document.getElementById('hamburguesas');
let btnCompra = document.getElementById('compra');
let btnCerrar = document.getElementById('cerrar');
// let dataCompra = JSON.parse(localStorage.getItem('carrito'));
let productosCompra = [] ;
// dataCarrito !== null ? dataCarrito : [] ;



document.addEventListener('DOMContentLoaded', async()=>{
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    showCards(data, contenCombos)
})

btnPerros.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    let perros = data.filter(item => item.categoria == 'perros' );
    showCards(perros, contenCombos)
})

btnCombos.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    let combos = data.filter(item => item.categoria == 'combos' );
    showCards(combos, contenCombos)
})

btnHamburguesas.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    let hamburguesas = data.filter(item => item.categoria == 'hamburguesas' );
    showCards(hamburguesas, contenCombos)
})




document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){
        let id = e.target.id;
        confirm("Esta seguro que quiere agregar este producto")
        productosCompra.push(id)
        localStorage.setItem('productos', JSON.stringify(productosCompra))
    }
})


btnCompra.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let response = await fetch('http://localhost:4000/food');
    let data = await response.json();
    let seleccionados = [];
    let dataCompra = new Set(JSON.parse(localStorage.getItem('productos')));
    let result = [...dataCompra];

    result.forEach(element => {
        let filtro = data.filter(item => item.id == element );
        console.log(filtro)
        seleccionados.push(filtro[0])
        console.log(seleccionados)
    }); 
    compra(seleccionados, conteResul, contenCombos)
    
    
    let btnResul= document.getElementById('btnResultado');
    btnResul.addEventListener('click',()=>{
        if(confirm("Esta seguro de su Compra")){
            window.location.href="menu.html"
            
        }
        storage.clear();
        
        
})
})

btnCerrar.addEventListener('click', ()=>{
    window.location.href="../index.html"
})


//hello