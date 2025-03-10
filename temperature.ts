// Fonction pour convertir Celsius en Fahrenheit
function celsiusToFahrenheit(celsius: number): number {
  return (celsius * 9/5) + 32;
}

// Fonction pour convertir Fahrenheit en Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
  return (fahrenheit - 32) * 5/9;
}

// Exemples de tests
console.log("Exemples de conversions :");
console.log("0°C en Fahrenheit :", celsiusToFahrenheit(0), "°F");
console.log("25°C en Fahrenheit :", celsiusToFahrenheit(25), "°F");
console.log("100°C en Fahrenheit :", celsiusToFahrenheit(100), "°F");

console.log("32°F en Celsius :", fahrenheitToCelsius(32), "°C");
console.log("75°F en Celsius :", fahrenheitToCelsius(75), "°C");
console.log("212°F en Celsius :", fahrenheitToCelsius(212), "°C");

