/**
 *? EJERCICIO 11: Crear una función que reciba un arreglo de números y realice la sumatoria de los mismos.
 *? La función debe retornar la sumatoria de esos números.
 *?
 */
function sumatoria(numeros = []) {
    let total=0
    for(let i of numeros) {
    total+=i;
    } 
    return total;

 }
console.log(sumatoria([1,2,3,5,6,7]))