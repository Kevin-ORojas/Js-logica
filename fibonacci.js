/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

let seq = [0, 1]
function Fibonacci (n) {
 for(let i = 2; i < n; i++){
 seq[i] = seq[i - 1] + seq[i - 2]
 }
 return seq
}

console.log(Fibonacci(13))