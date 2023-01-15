function verificarClave(objeto = {},clave) {

    let result = Object.prototype.hasOwnProperty.call(objeto,clave)
    return result;

}
console.log(verificarClave({nombre: 'Arturo', edad: 29, profesion: 'Ingeniero Redes'},'altura'))