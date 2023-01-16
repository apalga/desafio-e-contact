/**
 *? EJERCICIO 1: Crear una función la cual reciba un parámetro de tipo string con el nombre de la persona y retornar un nuevo string
 *? dependiendo del largo del nombre:
 *? Si el largo se encuentra entre 0 y 5 retornar "Es un nombre corto. Su largo es de: "
 *? Si el largo es 11 o mayor retornar "Es un nombre largo. Su largo es de: "
 *? IMPORTANTE: validar que el parámetro recibido sea un string al inicio de la función, de lo contrario, retornar "El parámetro recibido es invalido"
 *? RECORDATORIO: al leer la sentencia "return" termina la ejecución de la función.
 */
function largoDelNombre(nombre = "") {

    if (typeof nombre != "string")

    {
        return `El parámetro recibido es invalido.`;
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
console.log(largoDelNombre("Arturo Palga"))
//****valor esperado: Es un nombre LARGO. Su largo es: 12
console.log(largoDelNombre("Ciro"))
//****valor esperado: Es un nombre CORTO. Su largo es: 4