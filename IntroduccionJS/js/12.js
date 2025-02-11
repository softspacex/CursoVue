// Iteradores en JS

const tecnologias = ['Vuew.js', 'JavaScript', 'NodeJS', 'HTML','CSS'];

// forEach
const arrayForeEach = tecnologias.forEach(function(tech) {
    return tech;
});

// map
const arrayMap = tecnologias.map(function(tech) {
    return tech;
});

console.log(arrayForeEach); // No genera un nuevo arreglo
console.log(arrayMap); // Genera un nuevo arreglo