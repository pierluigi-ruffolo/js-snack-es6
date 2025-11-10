/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, 
un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori 
che hanno la posizione compresa tra i due numeri. 
Non usare i metodi di array di JS */

const numeri = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
const a = 3;
const b = 8;

function calcolo(numeri, a, b) {
  const newArr = [];
  for (let i = 0; i < numeri.length; i++) {
    const curNum = numeri[i];
    if (i > a && i < b) {
      newArr.push(curNum);
    }
  }
  return newArr;
}

const risultato = calcolo(numeri, a, b);
console.log(risultato);
