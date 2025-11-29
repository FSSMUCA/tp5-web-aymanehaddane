// Exercice 1
let x = "150";   // x est une chaîne de caractères
let y = 150;     // y est un nombre
let z = true;    // z est un booléen

console.log(typeof x); //  string
console.log(typeof y); //  number
console.log(typeof z); //  boolean

x = Number(x);
console.log(typeof x); 
// Explication du typage dynamique: JavaScript est dynamique, donc une variable peut changer de type pendant l’exécution, comme `x` qui passe de chaîne `"150"` à nombre `150`.

//Exercice 2

let prenom = "Sara";
let age = 22;
let phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(phrase);
age = 23;  
phrase = "Je m'appelle " + prenom + " et j'ai " + age + " ans.";
console.log(phrase);
phrase = `Je m'appelle ${prenom} et j'ai ${age} ans.`;
console.log(phrase);

// Exercice 3
let n = Number(prompt("Entrez un nombre :"));

if (n < 0) {
    console.log("Nombre négatif");
} else {
    if (n <= 10) {
        console.log("Petit");
    } else {
        if (n <= 50) {
            console.log("Moyen");
        } else {
            if (n <= 100) {
                console.log("Grand");
            } else {
                console.log("Très grand");
            }
        }
    }
}
// Exercice 4
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

// Exercice 5
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
// Exercice 7
function verifierMotDePasse(mdp) {
    if (mdp.length >= 8 && mdp.includes("@")) {
        return true;
    }
    return false;
}

let mdpUser = prompt("Entrez votre mot de passe : ");

if (verifierMotDePasse(mdpUser)) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

// Exercice 8
function totalAvecRemise(total, remise) {
    return total - (total * remise / 100);
}

let totalHT = Number(prompt("Entrez le total HT : "));
let remise = Number(prompt("Entrez la remise (%) : "));

let totalFinal = totalAvecRemise(totalHT, remise);
console.log("Total final :", totalFinal);

// Exercice 9
function factorielle(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorielle(n - 1);
}

console.log(factorielle(5)); // 120

// Exercice 10
       // Méthode itérative
function sommeIterative(n) {
    let s = 0;
    for (let i = 1; i <= n; i++) {
        s += i;
    }
    return s;
}
       // Méthode récursive
function sommeRecursive(n) {
    if (n === 0) return 0;
    return n + sommeRecursive(n - 1);
}



