/* Los arreglos en JavaScript son objetos que contienen una secuencia ordenada de elementos. 
Pueden contener cualquier tipo de dato,incluyendo números, cadenas, booleanos, objetos, 
e incluso otros arreglos. */


/*
push(): Agrega un elemento al final del arreglo.
pop(): Elimina el último elemento del arreglo.
shift(): Elimina el primer elemento del arreglo.
unshift(): Agrega un elemento al principio del arreglo.
splice(): Permite agregar, eliminar o reemplazar elementos en cualquier parte del arreglo.
concat(): Combina dos o más arreglos.
slice(): Devuelve una copia de una porción del arreglo.
*/


//¿Todo está ok?

const numbers = [1,2,3,4,5];

const checkOk = ['✅', '✅', '❎', '❎', '❎'];

function todoOk(elemento, index) {
    checkOk.index = index;
    return elemento === '✅';
}

console.log(checkOk.every(todoOk));


//Rellena los elementos del array con dinero

const bolsasdinero = ['', '', ''];

const dinero = bolsasdinero.fill('💰');

//let dinero = bolsasdinero.fill('💰').join(' , ');

console.log(dinero);


// Filtra la comida carnivora

const comidas = ['🥩', '🧀', '🥦'];

const filtrar = comidas.filter(function(comida) {
    return comida !== '🥩';
})

console.log(filtrar);


// Encuentra y devuelve la gallina

const animales = ['🐭', '🐷', '🐸', '🐔', '🐻'];

const encontrarAnimal = animales.find(function(animal) {
    return animal === '🐔';
})

console.log(encontrarAnimal);

//Transforma cada numero multiplicando por 2

let numeros = [2, 4, 6, 8, 10];
numeros.map(function(numero) {
    console.log(numero * 2);
});

const algunError = ['✅', '✅', '❎', '❎', '❎'];

function error(elemento, index) {
    return elemento === '❎';
}

console.log(algunError.some(error));