/**
 *? EJERCICIO 13: Crear una función que retorne un nuevo arreglo con el cuadrado de cada número del "arregloFijo" definido al inicio
 *? Ayuda: para calcular el cuadrado de un número podemos usar la expresión "**" o la clase "Math" con su método "pow". Ver ejemplos a continuación:
 *? Ejemplo de 3 al cuadrado:
 *? console.log(3 ** 2)
 *? Ejemplo de 5 al cuadrado:
 *? console.log(Math.pow(5, 2))
 */
function calcularCuadrados(arreglo = []) {
   const numeros = Object.values(arreglo);
   let NuevoArreglo =[];
   for(let i of numeros) {
        i=i**2;
        NuevoArreglo.push(i);
        } 

   return NuevoArreglo;
}
const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];
console.log(calcularCuadrados(arregloFijo))