export const compra = (data,contResultado,container)=>{
  let total =0; 
  data.forEach( card => {
    let{precio}=card;
    total = total+precio;
  });
  contResultado.innerHTML =`<div class="contResultado>  
  <p class="texto">Su Compra tiene con costo total de</p>
  <h3 id="resultado class="texto"> ${total}</h3>
  <button id="btnResultado"class="carrito" type="submit">Comprar</button></div> `
          
  data.forEach( card => {
    let {id, nombre,precio, imagen, descripcion } =card;
        container.innerHTML += 
        `
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
              <button id="${id}" class="carrito" type="submit">Unidades <span> 1</span>
              </button>
              <button id="${id}" class="btnEliminar" type>Eliminar</button>
          </div>
        </article>
        `
    });   
}
