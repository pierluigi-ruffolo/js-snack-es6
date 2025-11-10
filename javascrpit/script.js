/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo oppure in console la bici con peso minore. */
const resultElement = document.querySelector(".result");

const biciclette = [
  { nome: "Pinarello", peso: 9 },
  { nome: "Specialized", peso: 7 },
  { nome: "Canyon Aeroad", peso: 5 },
  { nome: "Trek Émonda", peso: 6 },
  { nome: "BMC Teammachine", peso: 10 },
  { nome: "Giant TCR Advanced", peso: 7 },
];

let minBici = biciclette[0].peso;
let bici = biciclette[0].nome;
for (let i = 1; i < biciclette.length; i++) {
  const curElement = biciclette[i];
  if (curElement.peso < minBici) {
    minBici = curElement.peso;
    bici = biciclette[i].nome;
  }
}

resultElement.innerHTML = `<p>la bici con peso minore è ${bici} con un peso di ${minBici}</p>`;
//* Snack2
/*Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

/* Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b). 
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. Non usare i metodi di array di JS */
