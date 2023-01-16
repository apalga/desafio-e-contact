/**
 *? EJERCICIO 3: Crear una función que reciba un objeto como parámetro con los claves nombre, edad y altura, y retornar un string usando template literals
 *? con el siguiente formato: "Esta persona se llama XXX, tiene XXX años y su altura es de XXX"
 *? NOTA: Desestructurar los valores del objeto antes de utilizarlos
 */
function datosPersona(persona = {}) {

    const { nombre: nom, edad, altura} = persona;

    return `Esta persona se llama ${nom}, tiene ${edad}, años y su altura es de ${altura}`;
}

const datos = datosPersona({nombre: "Arturo", edad: 29, altura: 1.71});
console.log(datos);
//****valor esperado: Esta persona se llama Arturo, tiene 29, años y su altura es de 1.71