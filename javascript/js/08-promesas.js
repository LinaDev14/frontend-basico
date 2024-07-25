/*
Las promesas en JavaScript son objetos que representan la eventual finalización 
(o falla) de una operación asincrónica, y su resultado. Son una manera más fácil 
y elegante de manejar operaciones asincrónicas en comparación con los callbacks anidados. 
Las promesas pueden estar en uno de tres estados: 
pendiente (pending), cumplida (fulfilled), o rechazada (rejected).
*/

/*
Puedes crear una promesa utilizando el constructor Promise, que toma una 
función ejecutora como argumento. Esta función toma dos parámetros: resolve, 
que se llama cuando la operación asincrónica se completa 
con éxito, y reject, que se llama cuando la operación asincrónica falla.

*/


let promesa = new Promise((resolve, reject) => {
    // Simulando una operación asincrónica
    setTimeout(() => {
        let exito = true; // Cambia a false para simular un fallo
        if (exito) {
            resolve('¡Operación completada con éxito!');
        } else {
            reject(new Error('¡Hubo un error en la operación!'));
        }
    }, 2000); // Simulación de una operación de 2 segundos
});


promesa.then((resultado) => {
    console.log(resultado); // Imprimirá '¡Operación completada con éxito!'
}).catch((error) => {
    console.error(error); // Imprimirá el mensaje de error si la promesa fue rechazada
});