/**
 * Número Par o Impar: Escribe un programa que pida al usuario un número y determine si es par o impar.
 */

const escribeNumero = parseInt(prompt("Escribe un numero"));

const numeroPar = (escribeNumero) => {
  if (escribeNumero % 2 === 0) {
    console.log("El numero es par");
  } else {
    console.log("El numero es impar");
  }
};

numeroPar(escribeNumero);
