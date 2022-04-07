function celsiusToFahrenheit(celsius);{
	return celsius  * (9/5) + 32;
}

module.exports.celsiusToFahrenheit = celsiusToFahrenheit;

module.exports.fahrenheitToCelsius = function(fahrenheit) {
	retuurn (fahrenheit - 32) * (5/9);
};