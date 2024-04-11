/* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

function miFuncion(cadena) {
  return cadena.length; //! => este metodo me devuelve la longitud de cadena o numeros.
}

console.log(miFuncion("Hola Mundo"));

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

function miFuncionOne(texto) {
  return texto.slice(0, 4); //! este metodo extrae una seccion de una cadena y devuelve una cadena nueva.
}

console.log(miFuncionOne("Hola Mundo"));

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

function miFunctionTwo(str) {
  return str.split(" "); //! => este metodo divide un objeto de tipo string en un array de cadenas mediante la separacion de la cadena en subcadenas.
}

console.log(miFunctionTwo("hola que tal", " "));

/* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

function miFuncionThree(caracter) {
  return (caracter + " ").repeat(3);
}

console.log(miFuncionThree("Hola mundo", 3));

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */

function invertirTexto(invertir) {
  return invertir.split("").reverse().join("");
}

console.log(invertirTexto("Hola Mundo"));

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

function repetirPalabras(texto, palabra) {
  let palabras = texto.split(" ");
  let contador = 0;

  for (let i = 0; i < palabra.length; i++) {
    if (palabras[i] === palabra) {
      contador++;
    }
  }
  return contador;
}
console.log(repetirPalabras("hola mundo adios mundo", "mundo"));

/*------------------------------------------*/

/*
 * Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

for (let i = 1; i < 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("fizz");
  } else if (i % 5 === 0) {
    console.log("buzz");
  }
}

/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function anagrama(palabra1, palabra2) {
  if (palabra1.length !== palabra2.length) {
    return false;
  }
  return (
    palabra1.split("").sort().join("") === palabra2.split("").sort().join("")
  );
}

console.log(anagrama("vaca", "cava"));

/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(n) {
  let fib = [0, 1];
  for (let i = 2; i <= 50; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib.slice(0, n);
}
const n = 20; // obetener los primeros 20 numeros de fibonacci
console.log(fibonacci(n));
