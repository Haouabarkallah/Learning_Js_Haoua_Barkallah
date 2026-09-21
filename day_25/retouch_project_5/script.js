// retouching Mini project 5 : testeur de types
function analyser(valeur){
    console.log(`Valeur :${JSON.stringify(valeur)}`);
    console.log(`Type : ${typeof valeur}`);
    console.log(`Truthy ? ${Boolean(valeur)}`);

}
[42,"TEXTE", "", 0, null, undefined, [], {}, NaN, true].forEach(analyser);