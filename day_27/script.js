
// Mini-projet 8 : « Devine le nombre »
const nombre = 5; // Le nombre secret à deviner
// // const lettre= 'H'; // La lettre secrète à deviner
let nombreDeviner = prompt("Devinez le nombre secret (entre 1 et 10) :") * 1; // Demande à l'utilisateur de deviner le nombre
 // Boucle jusqu'à ce que l'utilisateur devine le nombre        ) 
   
if (nombreDeviner === nombre) {
    console.log(`Super, vous avez trouvé le nombre secret ! ${nombreDeviner}` );// Si l'utilisateur devine la lettre
} else if (nombreDeviner < nombre) {
    console.log(`Le nombre secret est plus grand que ${nombreDeviner}.`); // Si la lettre devinée est inférieure à la lettre secrète
} else {
    console.log(`Le nombre secret est plus petit que ${nombreDeviner}.`); // Si la lettre devinée est supérieure à la lettre secrète
        
}
    

    

