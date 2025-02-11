// Arrow Functions

const sumar =  (numero1 = 0, numero2 = 10) => {
    console.log(numero1 + numero2);
};


const tecnologias = ['Vuew.js', 'JavaScript', 'NodeJS', 'HTML','CSS'];

// forEach
tecnologias.forEach(tech => console.log(tech) );

// map
const arrayMap = tecnologias.map(tech =>  tech );

const tecnologia2 = tecnologias.filter( tech => tech !== 'HTML' ); // Modifican el arreglo

console.log(arrayMap);
console.log(tecnologia2);

// sumar(1, 2);
// sumar(10, 296);
// sumar(24, 50);
