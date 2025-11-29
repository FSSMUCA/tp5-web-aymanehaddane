let min = Number(prompt("Entrez le nombre minimal : "));
let max = Number(prompt("Entrez le nombre maximal : "));

for (let i = min; i <= max; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i + " : Five&Three");
    } else if (i % 3 === 0) {
        console.log(i + " : Three");
    } else if (i % 5 === 0) {
        console.log(i + " : Five");
    } else {
        console.log(i);
    }
}