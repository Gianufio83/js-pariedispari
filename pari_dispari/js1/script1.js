// Gioco Pari e dispari:
// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var scelta = prompt('Scegli pari o dispari');
console.log(scelta);
var numero = parseInt(prompt('Scegli un numero tra 1 e 5'));
while (isNan(numero)) {
  var numero = parseInt(prompt('Devi inserire un numero'));
}
console.log(numero);
var numeroCasuale = getRandomIntInclusive(1,5);
console.log(numeroCasuale);
var somma = numeroCasuale + numero;
console.log(somma);

if (somma % 0 == 0) {
  var pari = true;
}
else {
  var pari = false;
}
if (scelta == 'pari' && pari == true) {
  console.log('Hai vinto');
} else if (scelta == 'dispari' && pari == false) {
  console.log('Hai vinto');
} else {
  console.log('Hai perso');
}




function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
