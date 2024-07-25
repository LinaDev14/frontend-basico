/* import y export son características de ECMAScript 6 
(también conocido como ES6) que permiten la modularización de código en 
JavaScript, facilitando la organización y reutilización de funciones, 
variables y otros recursos en diferentes archivos. */

export function sumar(a, b) {
    return a + b;
}

// Otra forma de exportar:
function restar(a, b) {
    return a - b;
}
export { restar };

