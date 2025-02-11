// Objetos

const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
};

// console.log(producto);
// console.log(producto.nombre);
// console.log(producto.precio);
// console.log(producto.disponible);

// Destructuring
const  {nombre, precio} = producto;

// console.log(nombre);
// console.log(precio);

// Object Literal
const autenticado = true;
const usuario = "Juan";

const nuevoObjeto = {
    autenticado,
    usuario : usuario
}
console.log(nuevoObjeto)