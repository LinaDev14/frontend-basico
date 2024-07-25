/*
La desestructuración de objetos en JavaScript es una característica introducida en 
ECMAScript 6 (ES6) que permite extraer valores de objetos y asignarlos a variables de 
forma más concisa y legible. 
Es útil cuando trabajas con objetos grandes y solo necesitas algunos de sus valores. 
*/

let persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid'
};


persona.nombre;
persona.edad;

// desestructuración basica

let { nombre, edad, ciudad } = persona;

console.log(nombre); // Imprimirá 'Juan'
console.log(edad); // Imprimirá 30
console.log(ciudad);

// También puedes asignar valores a variables con nombres diferentes utilizando la sintaxis 
// propiedad - valor

let { nombre: nombrePersona, edad: edadPersona } = persona;

console.log(nombrePersona); // Imprimirá 'Juan'
console.log(edadPersona); 

// Desestructuración en argumentos de función:

function saludar({ nombre, edad }) {
    console.log(`Hola, me llamo ${nombre} y tengo ${edad} años.`);
}

saludar(persona);

// Desestructuración anidada:

/*
let persona = {
    nombre: 'Juan',
    edad: 30,
    direccion: {
        calle: 'Calle Principal',
        ciudad: 'Madrid'
    }
};

let { nombre, edad, direccion: { calle, ciudad } } = persona;

console.log(calle); // Imprimirá 'Calle Principal'
console.log(ciudad); */