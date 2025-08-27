import { getHeroeById, getHeroesByOwner } from "./bases/08-import-export";



// const promesa = new Promise((resolve, reject) => {

//     setTimeout(() => {
//         // tarrea

//         const hero = getHeroeById(2)
//         resolve(hero)
//         // reject('no se pudo encontrar el herro');
//     }, 2000)

// });

// promesa.then((hero) => {
//     console.log('heroe', hero);
// })
//     .catch(err => console.warn(err));

const getHeroeByIdAsync = (id) => {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            // tarrea

            const hero = getHeroeById(id)
            if (hero) {
                resolve(hero)

            } else {

                reject('no se pudo encontrar el herro');
            }
        }, 2000)

    });
}
getHeroeByIdAsync(2).then(console.log)
    .catch(console.warn);