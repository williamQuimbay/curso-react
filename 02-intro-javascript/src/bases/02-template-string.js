//templay string

const nombre = 'william';
const apellido = 'quimbay';
// const nombreCompleto = nombre + " " + apellido

const nombreCompleto = ` 
${nombre} 
${apellido}
${1 + 1}
`;

console.log(nombreCompleto);

function getsaludo(nombre) {
    return 'hola mundo ' + nombre
}

console.log(`Este es un texto: ${getsaludo(nombre)}`);