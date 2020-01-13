// alert('ciao');
// Scrivi una funzione per capire se la parola è palindroma
var parolaUtente = prompt('Inserisci una parola');
console.log(parolaUtente);
// console.log(parolaUtente[0]);
// console.log(parolaUtente[1]);
// console.log(parolaUtente[2]);
// console.log(parolaUtente[3]);
// console.log(parolaUtente[4]);
// console.log(parolaUtente[5]);
// console.log(parolaUtente[6]);

var parolaAlContrario = giroParola(parolaUtente);
// for (var i = parolaUtente.length - 1; i > 0 ; i--) {
//   parolaAlContrario += parolaUtente[i];
// }
// console.log(parolaAlContrario);
if(parolaUtente == parolaAlContrario){
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
