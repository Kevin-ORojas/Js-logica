/**
 * Mayor de Tres Números: Escribe un programa que acepte tres números del usuario y determine cuál es el mayor de los tres.
 */

let num1 = parseInt(prompt("Ingrese el primer número: "));

let num2 = parseInt(prompt("Ingrese el segundo número: "));

let num3 = parseInt(prompt("Ingrese el tercer número: "));

const numeroMayorDeTres = () => {
  if (num1 > num2 && num1 > num3) {
    console.log(`El número ${num1} es el mayor.`);
  } else if (num2 > num1 && num2 > num3) {
    console.log(`El número ${num2} es el mayor.`);
  } else {
    console.log(`El número ${num3} es el mayor.`);
  }
};

numeroMayorDeTres();
