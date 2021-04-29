//1. L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
var scelta = prompt('Scegli tra Pari o Dispari');
console.log("L'utente ha scelto: " + scelta);
//controllare i valori inseriti

var userNumber = Number(prompt('Scegli un numero da 1 a 5'));
console.log("L'utemte ha scelto il numero : " + userNumber);

//2.Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
function rundomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

var result = Number(rundomNumber(1, 5));
console.log('Il numero random è: ' + result);

//3.Sommiamo i due numeri e Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)


//4.Dichiariamo chi ha vinto.

