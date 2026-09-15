// convertisseur de température
/* Objectif : pratiquer const/let, template literals (vues plus loin), et une fonction fléchée simple.*/
const celsiusToFahrenheit = (celsius) => (celsius *9)/5 + 32;
let temperatureCelsius = 25;
let temperatureFahrenheit = celsiusToFahrenheit(temperatureCelsius);
console.log(`${temperatureCelsius}°C = ${temperatureFahrenheit}°F`);