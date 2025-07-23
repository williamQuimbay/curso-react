// funciones

// const saludar = function (nombre) {

// }

const saludar2 = (nombre) => {
    return `hola, ${nombre}`
}
const saludar3 = (nombre) => `hola, ${nombre}`
const saludar4 = () => `hola mundo`


// console.log(saludar('Goku'));

console.log(saludar2('Goku'));
console.log(saludar3('Vegeta'));
console.log(saludar4());


const getUser = () => ({
    uid: 'ABCDE',
    username: 'odin'
})

const user = getUser()
console.log(user);

//! TAREA

//1. funciuon flecha
//2. objeto implicito

const getUsuarioActivo = (nombre) => ({
    uid: 'ABCD17',
    username: nombre
});

const UsuarioActivo = getUsuarioActivo('william');

console.log(UsuarioActivo);

