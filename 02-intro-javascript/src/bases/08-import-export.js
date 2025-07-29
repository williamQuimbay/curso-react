// import { heroes } from './data/heroes'
// import { heroes } from './data/heroes'
// import heroes, { owners } from "../data/heroes";
import heroes from "../data/heroes";

// console.log(owners); // individuales


export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id)

// console.log(getHeroeById(2));

//find no sirve
//filter
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === 'Marvel');

// console.log(getHeroesByOwner('Marvel'));


