function divisiblesPorCinco(numeros = []) {

    let i = numeros.values();
    let conteo = 0;
    
    for (let num of i) {
    
        if (num %5 ==0) {
    
            conteo = conteo + 1
        } 
    
    }
    return `La cantidad de numeros, en el arreglo, que son divisbles por 5 es = ${conteo}`;
   
 }

console.log(divisiblesPorCinco([5,10,15,20,1]));

