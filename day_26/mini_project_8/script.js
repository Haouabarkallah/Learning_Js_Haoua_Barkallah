// Mini-projet 8 : « Devine la lettre »


for (const tentative of tentatives) {
    if (tentative === nombreSecret) {
        console.log(`Trouvé ! Le nombre secret était ${nombreSecret}.`); // L'utilisateur a trouvé le nombre secret
        break; // Sort de la boucle si le nombre est trouvé 
    }else if (tentative < nombreSecret) {
        console.log(`Le nombre secret est plus grand que ${tentative}.`); // Le nombre secret est plus grand que la tentative
    }else {
        console.log(`Le nombre secret est plus petit que ${tentative}.`); // Le nombre secret est plus petit que la tentative
    }

}
// console.log(`Le nombre secret était ${nombreSecret}.`); // Affiche le nombre secret à la fin du jeu