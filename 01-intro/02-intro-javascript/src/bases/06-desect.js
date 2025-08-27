// Desestructuración de Objetos
// asisnacion Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman'
};

// const { nombre, edad, clave } = persona;

// console.log(nombre);
// console.log(edad);
// console.log(nickaname);

const useContext = ({ nombre, clave, edad, rango = 'Capitan' }) => {


    // console.log(nombre, edad, rango);

    return {
        nombreClave: clave,
        anios: edad,
        latLng: {
            lat: 14.222,
            lng: -12.345
        }
    }

}

const { nombreClave, anios, latLng: { lat, lng } } = useContext(persona);


console.log(nombreClave, anios);
console.log({ lat, lng });