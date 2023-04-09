const PRECIO = 1_998;
const btnTotal = document.querySelector('#btnTotal');
const cantidad = document.querySelector('#cantidad');

btnTotal.addEventListener('click', () => {

    const multiplicacion = cantidad.value * PRECIO;
    const total = document.querySelector('#precioTotal');

    const cantidadQ = cantidad;
    const cantidadTotal = document.querySelector('#cantidadTotal');
    precioTotal.innerHTML = ('USD ') + multiplicacion;

    cantidadTotal.innerHTML = cantidadQ.value;

    colorSelect = document.querySelector('#color');
            color = colorSelect.value;
            fig = document.querySelector(".figura")
            fig.style.backgroundColor = color;


    
});