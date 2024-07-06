// Seleccionar los datos del DOM
const btn = document.getElementById('card-btn');
const container = document.querySelector('card-container');

// Funcion para eliminar los elementos del DOM
var deleteElement = btn.addEventListener ('click', () => {
    const cardContent = document.getElementById('card-content');
    cardContent.removeChild(btn);
})

// Agregar elementos al DOM
var addElement = btn.addEventListener ('click', () =>{
    
})