const PRECIO = 1_998;
const btnTotal = document.querySelector('#btnTotal');
const cantidad = document.querySelector('#cantidad');

btnTotal.addEventListener('click', () => {

    const multiplicacion = cantidad.value * PRECIO;
    const total = document.querySelector('#precioTotal');
    const cantidadQ = cantidad;
    const cantidadTotal = document.querySelector('#cantidadTotal');

    // contatenación de string USD
    precioTotal.innerHTML = ('USD ') + multiplicacion;

    // impresión del precio total
    cantidadTotal.innerHTML = cantidadQ.value;

    //cambio de color ingresado en bground del circulo
    colorSelect = document.querySelector('#color');
    color = colorSelect.value;
    fig = document.querySelector(".figura")
    fig.style.backgroundColor = color;
});