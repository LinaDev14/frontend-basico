import { personas } from "../data/personas.js";

// Filtra hombres
const hombres = personas.filter(persona => persona.gender === 'Male');
console.log(hombres);
console.log("*------------------------------*")

// Ordena por apellido
const personasOrdenadasPorApellido = personas.sort((a, b) => a.last_name.localeCompare(b.last_name));
console.log(personasOrdenadasPorApellido);
console.log("*------------------------------*")

// Cuenta por género
const conteoPorGenero = personas.reduce((conteo, persona) => {
  conteo[persona.gender] = (conteo[persona.gender] || 0) + 1;
  return conteo;
}, {});
console.log(conteoPorGenero);
console.log("*------------------------------*")

// Nombres completos
const nombresCompletos = personas.map(persona => `${persona.first_name} ${persona.last_name}`);
console.log(nombresCompletos);
console.log("*------------------------------*")

/* npm init -y */