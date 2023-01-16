/**
 *? EJERCICIO 4: Crear una función que reciba 2 (dos) parámetros de tipo "number" con el inicio y fin del rango a operar. Evaluar cuántos números dentro de
 *? ese rango son "pares". Luego, retornar un string con la frase "La cantidad de números pares obtenido fue de: "
 *?
 */ 
function obtenerCantidadDePares(numero1, numero2){

    if (numero2 > numero1)

    {
        if(typeof numero1 === "number" && typeof numero2 === "number" ) {

            let conteo = 0;
            for (let i = numero1; i <= numero2; i++) {
            if ((i % 2) == 0) {
                conteo = conteo + 1;
            }
        }
    
           return `La cantidad de números pares obtenido fue de: ${conteo}`;
    
        }
        else
        {
            return `el valor ingresado no es correcto`;
        }

    }
    else
    {
        return `El primer numero debe ser menor al segundo numero`
    }

}
console.log(obtenerCantidadDePares(0,4));





