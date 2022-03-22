import { showCards } from "../modules/showCard.js";

let contenCombos = document.getElementById('containerCard');
let button = document.getElementById('perros');
let button2 = document.getElementById('combos');
let button3 = document.getElementById('hamburguesas');

document.addEventListener('DOMContentLoaded', async()=>{
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    showCards(data, contenCombos)
})

button.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    let perros = data.filter(item => item.categoria == 'perros' );
    showCards(perros, contenCombos)
})

button2.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    let combos = data.filter(item => item.categoria == 'combos' );
    showCards(combos, contenCombos)
})

button3.addEventListener('click', async()=>{
    contenCombos.innerHTML="";
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();
    let hamburguesas = data.filter(item => item.categoria == 'hamburguesas' );
    showCards(hamburguesas, contenCombos)
})

document.addEventListener('click', (e) => {
    if(e.target.classList.contains('btn')){
        let id = e.target.id;
        alert(id)
    }
})



