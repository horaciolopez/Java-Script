/**
 * Crear algoritmo que tome un array de objetos
 * y devuelva un array de pares
 */
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

let pares = [
    [1, { id: 1, name: "Horacio"}],
    [2, { id: 2, name: "Joaquin"}],
    [3, { id: 3, name: "Pabla"}],
];

function toPairs(arr) {
    let pairs = [];
    for (idx in arr) {
        let elemento = arr[idx];
        pairs[idx] = [elemento.id, elemento];
    }
    return pairs;
}

let resultado = toPairs(array);
console.log(resultado);

