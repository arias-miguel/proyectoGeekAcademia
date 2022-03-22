export const showCards = (data,container)=>{


    data.forEach( card => {
        let {id, nombre,precio, imagen, descripcion } =card;
        container.innerHTML += `
        <article class="card">
          <div class="header-card">
            <img src="${imagen}" alt="">
          </div>
          <div class="footer-card">
            <div class="categoria-card">
              <span>${nombre}</span>
            </div>  
              <div class="texto-card">
                <p>${descripcion}
                </p>
                <h3>Precio</h3>
                <h3>$ ${precio}</h3>
              </div>
              <button id="${id}" class="btn" type="submit">comprar
              </button>
          </div>
        </article>
        `
    });

}