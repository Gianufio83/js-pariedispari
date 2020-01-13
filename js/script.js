// alert('ciao');
// Scrivi una funzione per capire se la parola è palindroma

var listaParole = ['Mario', 'Anna', 'Area', 'Pentola', 'Oro', 'Ombrello'];
console.log(listaParole);
var parolaArray = [];
parolaArray = listaParole.split("");
console.log(parolaArray);
var parolaRand = getRandomWord(0, listaParole.length - 1);
if (listaParole.length == parolaArray)  {
  console.log('La parola è un Palindromo');
}
else {
  console.log('La Parola non è un Palindromo');
}

function getRandomWord(min, max) {
  min= Math.ceil(min);
  max= Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1) + min);
  return random;
}




// var parolaUno = prompt('Inserisci una parola');
// console.log(parolaUno);
// var parolaUnoArray = [];
// parolaUnoArray = parolaUno.split("");
// console.log(parolaUnoArray);
// if(parolaUno.length == parolaUnoArray.indexof()) {
//   console.log('la parola è un palindromo');
// }
// else {
//   console.log('la parola non è un palindromo');
// }

// function isPalindrom(parola) {
//   if (parola.length ) {
//
//   }
// }













// Gioco Pari e dispari:
