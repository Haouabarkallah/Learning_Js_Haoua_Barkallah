//Mini-projet 7 : « Générateur de table de multiplication »
function tableDeMultiplication(nombre, max =10){
    for (let i = 1; i <= max; i++) {
        console.log(`${nombre} x ${i} = ${nombre * i}`);
    }
} 