// Crear varios usuarios
function crearUsuario(name,mail){
    return{
        mail,
        name,
        activo: true,
        recuperarClave: function (){
            console.log("recuperando clave...");
        }
    }
}

let user1 = crearUsuario("Horacio","horaciolopez@gmail.com");
let user2 = crearUsuario("Pabla","pabla@gmail.com");

console.log(user1, user2);