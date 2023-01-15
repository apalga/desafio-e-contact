function largoDelNombre(nombre = "") {

    let valoresNoAceptados = /^[0-9]+$/;

    if (nombre.match(valoresNoAceptados))

    {
        return `El parámetro recibido es invalido`;
    }

    else

    {

        let largo = nombre.length;
        if (largo >= 0 && largo < 5)
            {
                return `Es un nombre CORTO. Su largo es: ${largo}`;
            }
        else
            {
                if (largo > 5 && largo < 11)
                    {
                        return `Su largo es: ${largo}`;
                    }

                if (largo >= 11)

                    {
                        return `Es un nombre LARGO. Su largo es: ${largo}`;
                    }
            }

    }

}
const valida_nombre = largoDelNombre("Arturo Ciro");
console.log(valida_nombre);