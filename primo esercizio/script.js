// genera un array di 10 numeri casuali range 1- 100, ma stavolta senza doppioni
const listaNum = [];

const array = document.getElementById("array");

while (listaNum.length < 10) {
    let num = Math.floor((Math.random() * 100) + 1);
    if (!listaNum.includes(num)) {
        listaNum.push(num);
    }
}

console.log(listaNum);

array.innerHTML += listaNum;