function datosPersona(persona = {}) {

    const { nombre: nom, edad, altura} = persona;

    return `Esta persona se llama ${nom}, tiene ${edad}, años y su altura es de ${altura}`;
}

const datos = datosPersona({nombre: "Arturo", edad: 29, altura: 1.71});
console.log(datos);