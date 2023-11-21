const contenedorTarjetas = document.getElementById("productos-container");

/** Crea las tarjetas de productos teniendo en cuenta la lista en vinilos.js */
function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const nuevaVinilo = document.createElement("div");
    nuevaVinilo.classList = "tarjeta-producto"
    nuevaVinilo.innerHTML = `
    <img src="./img/productos/${producto.id}.jpg" alt="Vinilo 1">
    <h3>${producto.nombre}</h3>
    <p class="precio">${producto.precio} €</p>
    <button>Agregar al carrito</button>`
    contenedorTarjetas.appendChild(nuevaVinilo);
    nuevaVinilo.getElementsByTagName("button")[0].addEventListener("click",() => agregarAlCarrito(producto))
  });
}
crearTarjetasProductosInicio(vinilos);