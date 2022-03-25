// import { guardar } from "../modules/guardar.js";
import { compra } from "../modules/compra.js";
import { showCards } from "../modules/showCard.js";

let contenCombos = document.getElementById('containerCard');
let conteResul = document.getElementById('resultado')
let btnMujer = document.getElementById('mujer');
let btnHombre = document.getElementById('hombre');
let btnNinos = document.getElementById('ninos');
let btnCompra = document.getElementById('compra');
let btnCerrar = document.getElementById('cerrar');
// let dataCompra = JSON.parse(localStorage.getItem('carrito'));
let productosCompra = [] ;
// dataCarrito !== null ? dataCarrito : [] ;



document.addEventListener('DOMContentLoaded', async()=>{
    let res = await fetch('http://localhost:4000/ropa');
    let data = await res.json();
    showCards(data, contenCombos)
})

btnMujer.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/ropa');
    let data = await res.json();
    let mujer = data.filter(item => item.categoria == 'mujeres' );
    showCards(mujer, contenCombos)
})

btnHombre.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/ropa');
    let data = await res.json();
    let hombre = data.filter(item => item.categoria == 'hombres' );
    showCards(hombre, contenCombos)
})

btnNinos.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/ropa');
    let data = await res.json();
    let ninos = data.filter(item => item.categoria == 'ninos' );
    showCards(ninos, contenCombos)
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
    let response = await fetch('http://localhost:4000/ropa');
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