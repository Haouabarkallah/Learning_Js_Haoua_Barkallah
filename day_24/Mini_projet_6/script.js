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

    }
}