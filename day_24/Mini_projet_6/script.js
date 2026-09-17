//Mini-projet 4 : « Calculatrice en console »
function calculatrice(a,b, operateur) {
    switch (operateur) {
        case "+":
            return a + b;
        case "-": 
            return a - b;    
        case "*": 
            return a * b;
        case "/": 
            return  b !== 0 ? a / b : "Erreur : Division par zéro";
        default:
            return " Opérateur inconnu. Veuillez utiliser +, -, * ou /.";

    }
}
console.log(calculatrice(10, 5, "+")); // Affiche 15
console.log(calculatrice(10, 0, "/")); // Affiche "Erreur : Division par zéro"