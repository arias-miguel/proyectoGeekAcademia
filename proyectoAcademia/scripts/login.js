let form = document.getElementById('loginForm');

form.addEventListener('submit',(e)=>{

    e.preventDefault();
    let emailU = document.getElementById('email').value;
    let passworU = document.getElementById('password').value;

    fetch('http://localhost:4000/Usuarios',{
        method: 'POST',
        body: JSON.stringify({
            userEmail: emailU,
            userPassword: passworU
        }),
        headers:{
            'Content-Type': "application/json; charset=UTF-8"
        }
    }).then(()=>{
        window.location.href="./pages/menu.html";
        alert("informacion guardada correctamente")  
    }).catch(()=>{
        alert("error")
    })

})