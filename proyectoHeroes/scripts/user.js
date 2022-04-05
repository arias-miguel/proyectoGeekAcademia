import { postApi } from "./addUser.js";
import { eliminarUser } from "./deleteUser.js";
import { finding } from "./find.js";
import { leerApi } from "./getData.js";
import objeEditar from "./objEditar.js";
import { editar } from "./putUser.js";
import saveUserOb from "./saveUserOb.js";



let btnGuardar = document.getElementById('btnGuardar');
let btnCorreo = document.getElementById('btnCorreo');
let btnEditar = document.getElementById('btnEditar');
let btnEliminar = document.getElementById('btnEliminar');

let formulario = document.getElementById('formulario');
const url= 'https://apiclase-04.herokuapp.com/usuarios'

let objetoUsuario ={};
//------------Guardar----------------/
formulario.addEventListener('submit', async (e)=>{
    e.preventDefault();
    objetoUsuario = saveUserOb();
    postApi(url, objetoUsuario);
    console.log(objetoUsuario);
    alert('EL Usuario fue Guardado')

})

//------------Buscar----------------/
btnCorreo.addEventListener("click", async () =>{
    let arrayDatos= await leerApi(url);
    let email = document.getElementById('email').value;
    finding(arrayDatos, email);
    
})
//-------------Editar---------------/
btnEditar.addEventListener('click', async ()=>{

    let objetoEditar = objeEditar();
    editar(url+"/",objetoEditar);
    console.log('editado');
    console.log(objetoEditar); 
    alert('EL Usuario fue eliminado')
})
//------------Eliminar----------------/

btnEliminar.addEventListener('click', async(e) =>{
    let objetoEliminar = objeEditar();
    if(objetoEliminar.id !== ''){
        eliminarUser(url+"/", objetoEliminar.id)
        alert('EL Usuario fue eliminado')
    }

})