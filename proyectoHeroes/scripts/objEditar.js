const objeEditar = () =>{
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value;
    let id= document.getElementById('id').value;

    const usuario ={
        nombre,
        apellido,
        correo,
        id
    }
    return usuario
}
export default objeEditar