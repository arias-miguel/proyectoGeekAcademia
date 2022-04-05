const saveUserOb = () =>{
    let nombre = document.getElementById('name').value;
    let apellido = document.getElementById('lastName').value;
    let correo = document.getElementById('email').value

        const usuario ={
            nombre,
            apellido,
            correo
        }
        return usuario
}
export default saveUserOb