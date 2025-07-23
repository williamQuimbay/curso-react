

const persona = {
    nombre: 'william',
    apellido: 'quimbay',
    edad: 33,
    direccion: {
        ciudad: 'bogota',
        zip: 4545345,
        lat: 14.2222,
        lng: 34.34534,
    }
};

// console.table({ persona });
console.log(persona);


const persona2 = { ...persona };
persona2.nombre = 'peter'

console.log(persona);
console.log(persona2);