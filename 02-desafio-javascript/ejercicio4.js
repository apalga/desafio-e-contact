 
function obtenerCantidadDePares(numero1, numero2){
    let conteo = 0;
    for (let i = numero1; i <= numero2; i++) {
    if ((i % 2) == 0) {
        conteo = conteo + 1;
    }
}
return `La cantidad de números pares obtenido fue de: ${conteo}`;
}
console.log(obtenerCantidadDePares(2,4));





