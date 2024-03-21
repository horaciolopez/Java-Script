// Las funciones son objetos de primera clase JS
function Usuario(nombre){
    this.nombre = nombre;
}

console.log(Usuario.name);
console.log(Usuario.length);

const U = Usuario
let user = new U("Horacio");

console.log(user);

function of(Fn, arg){
    return new Fn(arg);
}

let user1 = of(Usuario, "Horacio");
console.log(user1);

function returned(){
    return function(){
        console.log("Hola mundo");
    }
}

let saludo = returned();
saludo();