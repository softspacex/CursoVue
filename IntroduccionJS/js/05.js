const producto = {
    nombre : "Tablet",
    precio : 300,
    disponible : true
};

// Object.freeze(producto); // No permite reescribir, eliminar o agregar
Object.seal(producto); // Permite reescribir pero no eliminar 

// Reescribir un valor
producto.nombre = "Monitor Curvo";

// Anadir un valor
producto.imagen = "imagen.jps";

// Eliminar
// delete producto.disponible;


// const { disponible, ...producto2} = producto


console.log(producto);