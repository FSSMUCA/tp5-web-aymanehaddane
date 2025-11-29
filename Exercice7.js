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
