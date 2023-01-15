function validarNombre(nombres = [], nombre) {

    let found = nombres.find(i => i === nombre);

    if (found === nombre)
    {
        return true;
    }
    else
    {
        return false;
    }

}

console.log(validarNombre(['Arturo','David','Claudia'],'David'))