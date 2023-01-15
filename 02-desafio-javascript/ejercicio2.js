function contarTipoNumber(arreglo = []) {

    arreglo = arreglo.filter(function condition (element){
        if (typeof element == 'number') return true
        return false
    })
    var contar = arreglo.length;
    return `Existen ${contar} valore(s) numericos en el arreglo`

}

const valida_datos = contarTipoNumber(["Casa","45",true,1,2,"33","casa2"]);
console.log(valida_datos);