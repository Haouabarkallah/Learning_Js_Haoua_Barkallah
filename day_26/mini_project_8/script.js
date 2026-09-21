// Mini-projet 8 : « Devine le nombre »

const nombreSecret = Math.floor(Math.random() * 100) + 1; // Génère un nombre aléatoire entre 1 et 100
const tentatives =[45,70,60,65,63]; // Exemple de tentatives pour tester le code

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