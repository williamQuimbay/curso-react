//arreglos

// const arr = new Array(100);
const arreglo = [1, 2, 3, 4]
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)

let arreglo2 = [...arreglo, 5];

const arreglo3 = arreglo2.map(function (numero) {
    return numero * 2;
}
);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);
