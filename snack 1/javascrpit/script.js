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
