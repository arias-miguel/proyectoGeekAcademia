// let menu=document.querySelector('.dropdown')
// menu.addEventListener('click',()=>{
//     let drp = document.querySelector('.dropdown p');
    
//     drp.classList.toggle('show')
//     if(icon.classList.contains == 'fa-solid fa-angle-down'){
//         icon.classList.toggle('fa-solid fa-angle-up')
//       }else {
//         icon.classList.toggle('fa-solid fa-angle-down')
//       }

// })
document.addEventListener('DOMContentLoaded',()=>{
    let contenedor = document.getElementById('divScript');
    contenedor.innerHTML = `<div class="divPantalla2"> <img class="pantalla"src="./img/img2.PNG" alt=""></div>
    <div id="contenedorSimple">
    <h3 id="featur">Bookmark in one click</h3>
    <p id="feat">Organize your bookmarks however you like. Our 
        simple drag-and-drop interface gives you complete
        control over how you manage your favourite sites.
    </p>
    <div>
        <button class="moreIdesk">More Info</button>
    </div>
</div>`


    let btn1 = document.getElementById('btnes1');
    let btn2 = document.getElementById('btnes2');
    let btn3 = document.getElementById('btnes3');

    btn1.addEventListener('click',()=>{
        contenedor.innerHTML=''
        contenedor.innerHTML=`<div class="divPantalla2"> <img class="pantalla"src="./img/img2.PNG" alt=""></div>
        <div id="contenedorSimple">
        <h3 id="featur">Bookmark in one click</h3>
        <p>Organize your bookmarks however you like. Our 
            simple drag-and-drop interface gives you complete
            control over how you manage your favourite sites.
        </p>
        <div>
            <button class="moreIdesk">More Info</button>
        </div>
    </div>`
    })

    btn2.addEventListener('click',()=>{
        contenedor.innerHTML=''
        contenedor.innerHTML=`<div class="divPantalla2"> <img class="pantalla"src="./img/img3.PNG" alt=""></div>
        <div id="contenedorSimple">
        <h3 id="featur">Intelligent Search</h3>
        <p>Our powerful search feature will help you find saved sites 
        in no time at all. No need to trawl through all of your bookmarks.
        </p>
        <div>
          <button class="moreIdesk">More Info</button>
        </div>
    </div>`
    })

    btn3.addEventListener('click',()=>{
        contenedor.innerHTML=''
        contenedor.innerHTML=`<div class="divPantalla2"> <img class="pantalla"src="./img/img4.PNG" alt=""></div>
        <div id="contenedorSimple">
        <h3 id="featur">Share your bookmarks</h3>
        <p>Easily share your bookmarks and collections with others. 
        Create a shareable link that you can send at the click of a 
        button.
        </p>
        <div>
        <button class="moreIdesk">More Info</button> 
        </div>
    </div>`
    })

})