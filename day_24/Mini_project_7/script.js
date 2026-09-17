//Mini-projet 7 : « Générateur de table de multiplication »
function tableDeMultiplication(nombre, max =12){
    for (let i = 1; i <= max; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
} 
tableDeMultiplication(5); //appel de la fonction avec le nombre 5 et la valeur par défaut de max (12)