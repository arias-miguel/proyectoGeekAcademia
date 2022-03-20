import { showCards } from "../modules/showCard.js";

let contenCombos = document.getElementById('containerCard');
let button = document.getElementById('perros');

document.addEventListener('DOMContentLoaded', async()=>{
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();

    showCards(data, contenCombos)
})
button.addEventListener('submit', async()=>{
    let res = await fetch('http://localhost:4000/food');
    let data = await res.json();

    let perros = data.filter(item => item.categoria == 'perros' );
    showCards(data, perros)
})


