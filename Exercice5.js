let nmb = Number(prompt("Entrez un nombre : "));

for (let i = 1; i <= 10; i++) {
    console.log(nmb + " x " + i + " = " + (nmb * i));
}
// Exercice 6

let sommePairs = 0;
let sommeImpairs = 0;

for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        sommePairs += i;
    } else {
        sommeImpairs += i;
    }
}

console.log("Somme des nombres pairs :", sommePairs);
console.log("Somme des nombres impairs :", sommeImpairs);