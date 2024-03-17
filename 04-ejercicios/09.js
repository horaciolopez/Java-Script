/**
 * Crear algoritmo que devuelva un array de objetos en base a pares
 */
let pairs = [
    [1, {name: "Horacio"}],
    [2, {name: "Joaquin"}],
    [3, {name: "Pabla"}],

];

let array = [{
    id: 1,
    name: "Horacio",
},{
    id: 2,
    name: "Joaquin",
},{
    id: 3,
    nombre: "Pabla",
}];

function toCollection(arr) {
    let collection = [];
    for (idx in arr){
        let elemento = arr[idx];
        collection[idx] = elemento[1];
        collection[idx].id = elemento[0];
    }
    return collection;

}
let resultado= toCollection(pairs);
console.log(resultado);