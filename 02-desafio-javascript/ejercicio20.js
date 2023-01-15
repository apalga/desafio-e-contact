const numerosReales = [34.4552, 25.1543, 17.9438, 90.5, 67.82, 5, 9.99, 62.037];

function quitarParteDecimal(arregloNumerosReales = []) {

        const numeros = Object.values(arregloNumerosReales);
        let NuevoArreglo =[];
        for(let i of numeros) {
             i=Math.floor(i);
             NuevoArreglo.push(parseInt(i));
             } 
     
        return NuevoArreglo;
    
}

console.log(quitarParteDecimal(numerosReales));