function sumatoria(numeros = []) {
    let total=0
    for(let i of numeros) {
    total+=i;
    } 
    return total;

 }
console.log(sumatoria([1,2,3,5,6,7]))