//ES.1
var userWord = prompt('Inserire una parola Palindroma');
  
function invertiParola(word){
  var reverseWord = word.split('').reverse().join('');  
  return reverseWord;
}

var reverseWord = invertiParola(userWord);

if(userWord == reverseWord){
    console.log('La parola è palindroma');
  } else {
    console.log('La parola non è palindroma');
  }

  document.getElementById('palindromo').innerHTML = userWord;


//ES.2
//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt('Scegli tra pari o dispari');

console.log("L'utente ha scelto: " + scelta);
document.getElementById('choice').innerHTML = scelta;

var userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log("L'utente ha scelto il numero : " + userNumber);

document.getElementById('user_number').innerHTML = userNumber;

//2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var result = Number(rundomNumber(1, 5));
console.log('Il numero random è: ' + result);

document.getElementById('random').innerHTML = result;


//3.Sommiamo i due numeri e Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)

/* Funzione Somma */
function sum (number_1, number_2) {
    return number_1 + number_2;
}

var sum = sum(userNumber, result)
console.log('La somma è: ' + sum);

document.getElementById('sum').innerHTML = sum;

/* Funzione Pari o Dispari */
function isEven(number) {
    if(number % 2 === 0 ) {
        return 'pari';
    }
    return 'dispari';
}


//4.Dichiariamo chi ha vinto.
if(scelta == isEven(sum)) {
    console.log("Ha vinto l'utente");
    document.getElementById('winner').innerHTML = "Ha vinto l'utente";

} else {
    console.log("Ha vinto il computer");
    document.getElementById('winner').innerHTML = "Ha vinto il computer";

}


