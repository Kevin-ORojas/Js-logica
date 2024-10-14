/**
 * Suma de Pares: Escribe un programa que recorra los números del 1 al 100 y calcule la suma de todos los números pares.

    Pista: Usa un bucle for y una condición para identificar los números pares.
 */

const sumPares = (num) => {
  let suma = 0;
  for (let i = 1; i < num; i++) {
    if (i % 2 === 0) {
      suma += i;
    }
  }
  console.log(suma);
};

sumPares(100); // Debería devolver 2550 (la suma de los números pares del 1 al 100)
