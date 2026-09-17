// Mini project 5 : testeur de types
function analyser(valeur){
    console.log(`valeur :${JSON.stringify(valeur)}`);
    console.log(`type : ${typeof valeur}`);
    console.log(`Truthy ? ${Boolean(valeur)}`);

}
[42,"TEXTE", "", 0, null, undefined, [], {}, NaN, true].forEach(analyser);