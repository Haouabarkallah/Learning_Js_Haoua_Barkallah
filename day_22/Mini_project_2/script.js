// convertisseur de température
/* Objectif : pratiquer const/let, template literals (vues plus loin), et une fonction fléchée simple.*/
const celsiusToFahrenheit = (celsius) => (celsius *9)/5 + 32;
//let temperatureCelsius = prompt("Entrez la température en degrés Celsius :");// demander à l'utilisateur d'entrer la température en degrés Celsius
let temperatureCelsius = 27; // valeur par défaut pour les tests
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(`${temperatureCelsius}°C = ${temperatureFahrenheit}°F`);