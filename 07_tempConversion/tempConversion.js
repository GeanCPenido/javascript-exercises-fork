const convertToCelsius = function(Fahrenheit) {
  const toCelsius = (Fahrenheit - 32) * 5 / 9;
  return Math.round(toCelsius * 10) / 10;
};

const convertToFahrenheit = function(Celsius) {
  return Math.round((Celsius * 9 / 5 + 32) * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

// var rounded = Math.round(number * 10) / 10
// from F to C == x °F ≘ (x − 32) × 5/9 °C 
// from C to F == x °C ≘ (x × 9/5 + 32) °F 