function calculoMatematico(operacion, numero1, numero2) {

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
            resultado = "ingresaste un operador no valido"
          break;
      }

    return resultado;
}

console.log(calculoMatematico("+",1,2));