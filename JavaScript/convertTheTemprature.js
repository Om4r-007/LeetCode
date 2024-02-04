/**
 * @param {number} celsius
 * @return {number[]}
 */
var convertTemperature = function(celsius) {
    var output = [];
    const Kelvin = celsius + 273.15;
    output.push(Kelvin);
    const Fahrenheit = celsius * 1.80 + 32.00;
    output.push(Fahrenheit);
    return output;

};