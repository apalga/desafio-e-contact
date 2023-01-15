function cargarArreglo(numero) {

if (numero > 0)

{

  arreglo = [1,2,3,4];
  
  do {
    result = arreglo.push(numero);
  
  } while ( arreglo.length < 2 * numero);

  return arreglo;

}
else{

  return 'El numero ingresado debe ser mayor a 0'
}

}
 console.log(cargarArreglo(1));
