export const finding = async (arraynote, email)=>{
    
    let buscarCorreo= arraynote.find(user => user.correo === email)

    const {nombre, apellido, correo, id} = buscarCorreo
    document.getElementById('name').value = nombre
    document.getElementById('lastName').value = apellido
    document.getElementById('email').value = correo
   // document.getElementById('id').style.display='block'
  //  document.getElementById('label-edit').style.display='block'
    document.getElementById('id').value = id
}
