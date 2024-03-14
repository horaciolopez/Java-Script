/*
 * Nombre ancho y alto
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080
 * HD 1280 x 720
 */
function nombreResolucion(ancho, alto){
    if (ancho >= 7680 && alto >= 4320){
       return "8K"; 
    }
    
}

let nombre = nombreResolucion(7880, 4500);
console.log(nombre);