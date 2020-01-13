// alert('ciao');
// Scrivi una funzione per capire se la parola è palindroma
var parolaUtente = prompt('Inserisci una parola');
// console.log(parolaUtente);
// console.log(parolaUtente[0]);
// console.log(parolaUtente[1]);
// console.log(parolaUtente[2]);
// console.log(parolaUtente[3]);
// console.log(parolaUtente[4]);
// console.log(parolaUtente[5]);
// console.log(parolaUtente[6]);

var parolaAlContrario = giroParola(parolaUtente);
// var parolaAlContrario = '';
// for (var i = parolaUtente.length - 1; i > 0 ; i--) {
//   parolaAlContrario += parolaUtente[i];
// }
// console.log(parolaAlContrario);
if(parolaUtente == parolaAlContrario) {
  console.log('La parola è un Palindromo');
}
else {
  'La Parola non è un Palindromo'
}

function giroParola (parola) {
  var parolaGirata = '';
  for (var i = parolaUtente.length - 1; i > 0 ; i--) {
    var parolaGirata += parola[i];
  }
  return parolaGirata;
}
console.log(parolaAlContrario);


// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

// var scelta = prompt('Scegli pari o dispari');
// console.log(scelta);
// var numero = parseInt(prompt('Scegli un numero tra 1 e 5'));
// console.log(numero);
// var numeroCasuale = getRandomIntInclusive(1,5);
// console.log(numeroCasuale);
// var somma = numeroCasuale + numero;
// console.log(somma);
// if (somma % 0 == scelta) {
//   console.log('Hai vinto');
// }
// else {
//   console.log('Hai perso');
// }
//
// function getRandomIntInclusive(min, max) {
//   min = Math.ceil(min);
//   max = Math.floor(max);
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
