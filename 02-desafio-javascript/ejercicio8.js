/**
 *? EJERCICIO 8: Crear una función que reciba 3 (tres) parámetros: uno de tipo "string" con la operación matemática a realizar,
 *? un segundo y tercer parámetro ambos de tipo number. Dependiendo de ello realizar la operación correspondiente y retornar el resultado de esa operación.
 *? Los valores permitidos a recibir son:
 *? "+"
 *? "-"
 *? "*"
 *? "/"
 *? En caso contrario, retornar un string con la frase "La operación matemática que intenta realizar es inexistente"
 */
function calculoMatematico(operacion, numero1, numero2) {

  if (typeof numero1 == "number" && typeof numero2 == "number")
  {
    switch (operacion) {
      case "+":
          resultado = numero1 + numero2;
        break;
      case "-":
          resultado = numero1 - numero2;
        break;
      case "*":
          resultado = numero1 * numero2;
        break;
      case "/":
          resultado = numero1 / numero2;
        break;
      default:
          resultado = "Ingresaste un operador NO validp"
        break;
    }

  return `${numero1} ${operacion} ${numero2} = ${resultado}`;

  }
  else
  {
    return `La operación matemática que intenta realizar es inexistente`
  }


}
console.log(calculoMatematico("-",1,2));
//****valor esperado: 1 - 2 = -1
console.log(calculoMatematico("-","acb",2));
//****valor esperado: La operación matemática que intenta realizar es inexistente