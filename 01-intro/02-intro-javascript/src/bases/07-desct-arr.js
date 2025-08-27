

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [p1, p2, p3] = personajes;

console.log(p3, p2, p1);


const returnaASrreglo = () => {
    return ['ABC', 123];
}

const [letras, numeros] = returnaASrreglo();

console.log(letras, numeros);

// tarea
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setNombre

const useState = (valor) => {

    return [valor, () => { console.log('Hola Mundo') }]
}

const [nombre, setNombre] = useState('Goku');

console.log(nombre);
setNombre()