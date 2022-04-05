
import { leerApi } from "./getData.js";
import { listarCards } from "./listarCards.js";

let btnMarvel = document.getElementById("btnCategory1")
let btnDC = document.getElementById("btnCategory2")
let listarCard = document.getElementById("listarCard")

btnMarvel.addEventListener('click', async()=>{
    const array= await leerApi('https://apiclase-04.herokuapp.com/marvel')
    listarCards(array, listarCard)
})

btnDC.addEventListener('click', async()=>{
    const array= await leerApi('https://apiclase-04.herokuapp.com/dc')
    listarCards(array, listarCard)
})