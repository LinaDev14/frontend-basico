/*
las funciones son bloques de código reutilizables que puedes definir una vez y 
ejecutar en cualquier momento que lo necesites. Pueden aceptar parámetros, 
realizar tareas específicas y devolver un valor opcional. 
*/


function saludar() {
    console.log('¡Hola!');
}

// Llamando a la función
saludar(); 

// funciones de primera clase

/* las funciones son objetos de primera clase, lo que significa que pueden asignarse a variables, 
pasarse como argumentos a otras funciones y 
devolverse como valores desde otras funciones: */

let sumar = function(a, b) {
    return a + b;
};

let operacion = sumar;

console.log(operacion(5, 3));

/*
Las funciones de flecha son una característica introducida en ECMAScript 6 
(también conocido como ES6) que proporciona una sintaxis más compacta y 
concisa para definir funciones en JavaScript. Estas funciones son especialmente 
útiles cuando necesitas funciones simples que no requieren un cuerpo de función 
grande y que pueden ser expresadas de manera más clara y elegante.
*/

// Función de flecha sin parámetros
let saludar = () => {
    console.log('¡Hola!');
};

// Función de flecha con un parámetro
let saludarPersona = (nombre) => {
    console.log('¡Hola, ' + nombre + '!');
};

// Función de flecha con múltiples parámetros
let suma = (a, b) => {
    return a + b;
};

console.log(suma(5, 3));


