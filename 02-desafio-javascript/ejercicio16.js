/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */
function devolverPosicion(numeros = [], numero) {

    let i = numeros.indexOf(numero);
    return i;
}
console.log(devolverPosicion([1,2,3,40],3))