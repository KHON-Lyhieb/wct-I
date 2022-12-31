const celsius = document.getElementById('celsius');
const fahrenheit = document.getElementById('fahrenheit');

celsius.addEventListener('input', celsiusToFahrenheit);
fahrenheit.addEventListener('input', fahrenheitToCelsius);

// convert celsius to fahrenheit
function celsiusToFahrenheit() {
  fahrenheit.value = (celsius.value * 9) / 5 + 32;
}

// convert fahrenheit to celsius
function fahrenheitToCelsius() {
  celsius.value = ((fahrenheit.value - 32) * 5) / 9;
}
