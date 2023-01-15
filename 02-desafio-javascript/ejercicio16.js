function devolverPosicion(numeros = [], numero) {

    let i = numeros.indexOf(numero);
    return i;
}
console.log(devolverPosicion([1,2,3,40],1))