const user = { id: 1};

user.name = "Nicolas";
user.guardar = function(){
    console.log("Guardando",user)
}

user.guardar();

delete user.name;
delete user.guardar;
console.log(user);

//const user1 = Object.freeze({ id: 1}); NO SE PUEDE MODIFICAR EL OBJETO
const user1 = Object.seal({ id: 1}); //CAMBIAR EL VALOR A UNA PROPIEDAD
user1.name = "Horacio";
user1.id = 2;
console.log(user1);