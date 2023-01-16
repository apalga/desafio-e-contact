/**
 *? EJERCICIO 2: Crear una función que reciba un arreglo como parámetro y cuente cuantos valores de tipo "number" se encuentran dentro de dicho arreglo
 */
function contarTipoNumber(arreglo = []) {

    let contador=0
    for (const value of arreglo) {
        if(typeof value==="number") 
        {contador +=1;}
    }
    return `El arreglo tiene ${contador} valore(s) de tipo number`;
}
console.log(contarTipoNumber(["Casa","45",true,1,2,"33","casa2"]));
//****valor esperado: El arreglo tiene 2 valore(s) de tipo number