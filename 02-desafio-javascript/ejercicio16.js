/**
 *? EJERCICIO 16: Crear una función que reciba 2 (dos) parámetros: un arreglo de números y número. La función debe retornar la posición de ese valor en el arreglo
 */
function devolverPosicion(numeros = [], numero) {

    if (numeros.includes(numero)){

        let i = numeros.indexOf(numero);
        return i;
    }
    else
    {
        return `el valor no se encuentra en el arreglo`
    }
    
}
console.log(devolverPosicion([1,2,3,40],3))
//****valor esperado: 2
console.log(devolverPosicion([1,2,3,40],50))
//****valor esperado: el valor no se encuentra en el arreglo