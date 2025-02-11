const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

// heading.addEventListener('click', sumar);

// function sumar(){
//     console.log(2 + 2);
// }

heading.addEventListener('click', () => {
    // const numero = 2;
    // if(numero === 10){
    //     heading.textContent = 'Mi numero es 10';
    // }else{
    //     heading.textContent = "El numero es diferente";
    // }

    heading.textContent = 'Nuevo heading al dar click'
});

enlaces.forEach(enlace => {
    enlace.addEventListener('click', (e) => {
        // console.log(e.target);
        e.preventDefault();
        enlace.textContent = 'Nuevo Nombre'
    });
});