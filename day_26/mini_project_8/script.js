// Mini-projet 8 : « Devine la lettre »
const lettre = 5; // La lettre secrète à deviner
// // const lettre= 'H'; // La lettre secrète à deviner
let lettreDeviner; // La lettre que l'utilisateur va deviner
for (let i=lettreDeviner; i !== lettre; i--) { // Boucle jusqu'à ce que l'utilisateur devine la lettre) 
   let lettreDeviner = prompt("Devinez la lettre secrète (entre A et Z) :") * 1; // Demande à l'utilisateur de deviner la lettre
   if (lettreDeviner === lettre) {
        console.log(`Super, vous avez trouvé la lettre secrète ! ${lettre}` );// Si l'utilisateur devine la lettre
   } else if (lettreDeviner < lettre) {
        console.log(`La lettre secrète est plus grande que ${lettreDeviner}.`); // Si la lettre devinée est inférieure à la lettre secrète
   } else {
        console.log(`La lettre secrète est plus petite que ${lettreDeviner}.`); // Si la lettre devinée est supérieure à la lettre secrète
        break; // Sort de la boucle si l'utilisateur devine la lettre
    }
    

    
}
