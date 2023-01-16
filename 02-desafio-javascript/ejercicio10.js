/**
 *? EJERCICIO 10: Crear una función que reciba un arreglo de números como parámetro y calcule cuántos de esos números son divisibles por 5.
 *? La función debe retornar la cantidad de números divisibles por 5.
 *?  Ayuda: Usar el operador módulo (o resto) "%"
 */
function divisiblesPorCinco(numeros = []) {

    let i = numeros.values();
    let conteo = 0;
    
    for (let num of i) {
    
        if (num %5 ==0) {
    
            conteo = conteo + 1;
        } 
    
    }
    return `La cantidad de numeros, en el arreglo, que son divisbles por 5 es = ${conteo}`;
   
 }
console.log(divisiblesPorCinco([5,10,15,20,1]));

