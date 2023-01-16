/**
 *? EJERCICIO 18: Crear una función que reciba 2 (dos) parámetros: el "objetoFijo" definido al inicio y un número (cantidad de empleados).
 *? La función debe retornar la cantidad de sedes que tengan una cantidad de empleados menor a la cantidad establecida como segundo parámetro.
 */
function verificarCantidadEmpleados(econtact = {}, cantidad) {

    const sedes = Object(econtact.datos.sedes);
    const {Chile, Peru, EEUU, Ecuador, Colombia} = sedes;
    contar = 0;

    if (Chile.empleados < cantidad)
    {
        contar = contar +1;
    }
    if (Peru.empleados < cantidad)
    {
        contar = contar +1;
    }
    if (EEUU.empleados < cantidad)
    {
        contar = contar +1;
    }
    if (Ecuador.empleados < cantidad)
    {
        contar = contar +1;
    }
    if (Colombia.empleados < cantidad)
    {
        contar = contar +1;
    }
    return `Existen ${contar} sedes con menos de ${cantidad} empleados`;
}
const objetoFijo = {
  empresa: "E-Contact",
  datos: {
    empleados: 100,
    direccion: {
      calle: "Calle Córdoba",
      numero: 476,
      piso: 3,
    },
    sectores: [
      "Contabilidad",
      "Finanzas",
      "Informática",
      "Atención al público",
    ],
    sedes: {
      Chile: { telefono: 56227566262, empleados: 35 },
      Peru: { telefono: 5116358614, empleados: 25 },
      EEUU: { telefono: 17864978777, empleados: 43 },
      Ecuador: { telefono: null, empleados: 19 },
      Colombia: { telefono: 3178952449, empleados: 28 },
    },
  },
};
console.log(verificarCantidadEmpleados(objetoFijo,100));