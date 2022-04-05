import { postApi } from "./addUser.js";
import { eliminarUser } from "./deleteUser.js";
import { finding } from "./find.js";
import { leerApi } from "./getData.js";
import saveUserOb from "./saveUserOb.js";



let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
const url= 'https://apiclase-04.herokuapp.com/usuarios'

let objetoUsuario ={}

//------------Guardar----------------/
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    objetoUsuario = saveUserOb()
    postApi(url, objetoUsuario)
    console.log(objetoUsuario)
})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () =>{
    let arrayDatos= await leerApi(url)
    let email = document.getElementById('email').value
    finding(arrayDatos, email)

})


//-------------Editar---------------/
btnEditar.addEventListener('click', async ()=>{
    let nameM = document.getElementById('name').value;
    let lastNameM = document.getElementById('lastName').value;
    let emailM = document.getElementById('email').value
    let idM= document.getElementById('id').value

    console.log(url+idM)
    let resp = await fetch(url+idM, {
        method: 'PUT',
        body: JSON.stringify({
            nombre: nameM,
            apellido:lastNameM,
            correo: emailM,
            id: idM
        }),
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        }
    })
    let data = await resp.json()
    console.log(data)
    
})


//------------Eliminar----------------/

btnEliminar.addEventListener('click', async(e) =>{
    let idEliminar = e.target.id
    console.log(idEliminar)
    
    if(idEliminar !== ''){
        eliminarUser(url, idEliminar)
    }

})