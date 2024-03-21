const punto = {
    x: 10,
    y: 15,
    dibujar(){
        console.log("dibujando");
    }
};
//delete punto.dibujar
if ("dibujar" in punto){
    punto.dibujar();
}
// let keys = Object.keys(punto);
//console.log(Object.keys(punto));
for (let llave of Object.keys(punto)){
    console.log(llave,punto[llave]); // codigo antiguo
}

for(let entry of Object.entries(punto)){
    console.log(entry);     //codigo antiguo 
}    //podemos toparnos muchas veces con codigo que fue escrito de esta manera

for (let llave in punto){
    console.log(llave, punto[llave]);
}     // codigo actual

