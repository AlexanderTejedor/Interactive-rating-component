// Seleccionar los datos del DOM
const btn = document.getElementById('card-btn');

// Funcion que se ejecuta al hacer click en el boton
var deleteElement = btn.addEventListener ('click', () => {
    //Limpiar el contenedor card-content
    const container = document.getElementById('card-content');
    container.innerHTML = '';

    //Agregar elementos al DOM
    const figure = document.createElement('figure');
    container.appendChild(figure);

    const img = document.querySelector('figure');
    img.innerHTML = '<img src="./assets/images/illustration-thank-you.svg" alt="Image">';

    const span = document.createElement('span');
    span.textContent = 'You selected 4 out of 5';
    container.appendChild(span);

    const title = document.createElement('h1');
    title.textContent = 'Thank you!';
    container.appendChild(title);

    const description = document.createElement('p');
    description.textContent = `We appreciate you taking the time to give a rating. if your ever need more support. don't hesitate to get in touch!`;
    container.appendChild(description);

    //Agregar clases a los elementos
    title.classList.add('card-title-two');
    description.classList.add('card-description-two')
    figure.classList.add('card-image')
    span.classList.add('selection')
    //Reemplazar elementos del DOM
})

