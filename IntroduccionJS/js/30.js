const url = "https://jsonplaceholder.typicode.com/comments";

const consultarApi = () => {
   fetch(url)
     .then((respuesta) => {
        return respuesta.json();
     })
     .then(resultado => {
        console.log(resultado);
     })
     .catch(error => {
        console.log(error);
     })
     .finally(() => {
        console.log('Todo Listo')
     })
};

consultarApi();