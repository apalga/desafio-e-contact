const arregloFijo = [1, 3, 4, 7, 12, 18, 20, 26];

function calcularCuadrados(arreglo = []) {
   const numeros = Object.values(arreglo);
   let NuevoArreglo =[];
   for(let i of numeros) {
        i=i**2;
        NuevoArreglo.push(i);
        } 

   return NuevoArreglo;
}
console.log(calcularCuadrados(arregloFijo))