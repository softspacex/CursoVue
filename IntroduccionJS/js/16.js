const tecnologias = ["Vuew.js", "JavaScript", "NodeJS", "HTML", "CSS"];
const numeros = [10, 20, 30];


// Includes
let resultado = tecnologias.includes('Graph');

// FindIndex
resultado = tecnologias.findIndex(tech => tech === 'CSS');

// Some
resultado = numeros.some(numero => numero > 35);

// Find
resultado = numeros.find(numero => numero === 5);

// Every
resultado = numeros.every(numero => numero > 1);

// Reduce
resultado = numeros.reduce((total,numero) => numero + total, 0);

// filter
resultado = tecnologias.filter(tech => tech === 'CSS');

console.log(resultado);