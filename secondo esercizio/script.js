// Crea un array vuoto e chiedi all’utente un numero da inserire
// Continua a chiedere i numeri all’utente e a inserirli
// Fino a quando la somma degli elementi è minore di 50

const listaNum = [];

let sommaNumUtente=0;

do {
    sommaNumUtente=0;
    let numUtente = parseInt(prompt("Insersci un numero"));
    listaNum.push(numUtente);

    for (let i = 0; i < listaNum.length; i++) {
        sommaNumUtente += listaNum[i];
    }
}

while (sommaNumUtente < 50);

console.log(listaNum);