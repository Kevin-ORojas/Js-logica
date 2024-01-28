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
  return str.split(' ') //! => este metodo divide un objeto de tipo string en un array de cadenas mediante la separacion de la cadena en subcadenas.
}

console.log(miFunctionTwo('hola que tal', ' '))