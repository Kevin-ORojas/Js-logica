/**
 * Palíndromo: Escribe un programa que verifique si una palabra o frase es un palíndromo (se lee igual de adelante hacia atrás).

    Pista: Ignora los espacios y considera todo en minúsculas.
 */

const palindromo = (palabra) => {
  const lowerCasePalabra = palabra.toLowerCase().replace(/\s/g, "");
  const reversedPalabra = lowerCasePalabra.split("").reverse().join("");
  return lowerCasePalabra === reversedPalabra;
};

console.log(palindromo("amar"));
console.log(palindromo("rama"));
