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