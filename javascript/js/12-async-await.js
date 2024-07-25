/*
async/await es una característica introducida en ECMAScript 2017 (también conocido como ES8) 
que proporciona una sintaxis más limpia y concisa para trabajar con promesas en JavaScript. 
async se utiliza para declarar que una función devuelve una promesa, mientras que await se utiliza 
para esperar la resolución de una promesa dentro de una función asíncrona.
*/

/*
Funciones asíncronas (async):
Una función asíncrona es una función que devuelve una promesa. 
Puedes declarar una función asíncrona utilizando la palabra clave async. 
Dentro de una función asíncrona, 
puedes utilizar await para esperar la resolución de promesas.
*/

async function miFuncion() {
    return 'Hola mundo';
}

/*
Esperar (await) dentro de funciones asíncronas:
Dentro de una función asíncrona, puedes utilizar await para esperar la resolución de una promesa. 
Esto hace que el código se vea síncrono, 
a pesar de que esté realizando operaciones asincrónicas.
*/

async function miFuncion() {
    let resultado = await otraPromesa();
    console.log(resultado);
}

/*
En resumen, esta función miFuncion espera a que la promesa devuelta por otraPromesa() 
se resuelva, y luego imprime el resultado en la consola. Este uso de await dentro de una función async hace que el código sea más fácil de entender y mantener, 
especialmente cuando trabajas con operaciones asincrónicas en JavaScript.
*/

/*
Tratamiento de errores
Puedes manejar errores en funciones asíncronas utilizando try/catch, al igual que con las promesas
*/

async function miFuncion() {
    try {
        let resultado = await otraPromesa();
        console.log(resultado);
    } catch (error) {
        console.error(error);
    }
}