export const listarCards = async (arrayDatos, listarHTML)=>{
        
        listarHTML.innerHTML = ''

        arrayDatos.forEach(heroe =>{
            const {nombre, imagen, historia}=heroe
    
            listarCard.innerHTML +=`
            <div class="card" style="width: 18rem;">
            <img src=${imagen} class="card-img-top" alt="...">
            <div class="card-body">
                <h1>${nombre}</h1>
              <p class="card-text">${historia}</p>
            </div>
          </div>
            `
        })
}
