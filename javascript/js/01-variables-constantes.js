// var, let y const

/*
var fue la forma tradicional de declarar variables en JavaScript antes de la introducción de let y const. 
Las variables declaradas con var tienen un alcance de función o global. 
Una variable declarada con var puede ser reasignada y redeclarada en el mismo ámbito:
*/

var x = 10;
console.log(x); // Imprimirá 10

var x = 20; // Re-declaración permitida
console.log(x); 

/*
let:
let es una forma más moderna de declarar variables en JavaScript. 
Las variables declaradas con let tienen un alcance de bloque, lo que significa que solo están disponibles 
dentro del bloque donde fueron declaradas. Además, no pueden ser redeclaradas en el mismo ámbito:
*/

let suma = (a, b) => a + b;

console.log(suma(5, 3));


/*

const se utiliza para declarar variables cuyo valor no cambiará a lo largo del tiempo (es decir, constantes). 
Las variables declaradas con const también tienen un alcance de bloque y no pueden ser reasignadas ni redeclaradas:
*/

const colors = ['rojo', 'verde', 'azul'];
console.log(colors);