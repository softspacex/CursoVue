const tecnologias = ['Vuew.js', 'JavaScript', 'NodeJS', 'HTML','CSS'];

// tecnologias.push('Git'); // anade elemento al final del arreglo
// tecnologias.unshift('Git'); // anaded elemento al inicio del arreglo

// const nuevoArreglo = [...tecnologias, 'Git']; // Crear un nuevo arreglo con un nuevo elemento

// tecnologias.pop(); // Elimina elemento del final del arreglo

// tecnologias.shift(); // Elimina del inicio del arreglo

// tecnologias.splice(0,1); // 

const tecnologia2 = tecnologias.filter( function(tech) {
    return tech !== 'HTML';
}); // Modifican el arreglo

// console.log(tecnologias);
// console.log(nuevoArreglo);
console.log(tecnologia2);