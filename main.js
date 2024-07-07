// Seleccionar los datos del DOM
const btn = document.getElementById('card-btn');
const options = document.querySelectorAll('.active-btn'); // Selecciona todos los botones de opciones
const container = document.getElementById('card-content');
// Funcion que se ejecuta al hacer click en el boton
var deleteElement = btn.addEventListener ('click', () => {
    //validar si el usuario selecciono una opcion
    if (!userSelection) {
        const span = document.createElement('span');
        span.textContent = 'Please select an option before submitting.';
        span.classList.add('error-message')
        container.appendChild(span);
        btn.disabled = true;
        return;
    }else{
        //Limpiar el contenedor card-content
        container.innerHTML = '';
        //Agregar elementos al DOM
        const figure = document.createElement('figure');
        container.appendChild(figure);

        const img = document.querySelector('figure');
        img.innerHTML = '<img src="./assets/images/illustration-thank-you.svg"  alt="Image">';

        const div = document.createElement('div');
        div.innerHTML = `<p> You selected ${userSelection} out of 5 </p>`;
        container.appendChild(div);

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
        div.classList.add('selection')
        //Reemplazar elementos del DOM
    } 
})
//recordar el valor seleccionado por el usuario
const stars = document.querySelectorAll('.star');
let userSelection = null; // Variable para almacenar la selección del usuario
// Función para manejar la selección de una opción
options.forEach(option => {
    option.addEventListener('click', function() {
        userSelection = this.textContent; // Guarda el texto del botón seleccionado
        options.forEach(btn => btn.classList.remove('selected')); // Remueve la clase 'selected' de todos los botones
        this.classList.add('selected'); // Añade la clase 'selected' al botón clickeado
        btn.disabled = false; // Habilita el botón de submit
    });
});