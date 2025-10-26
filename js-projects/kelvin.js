// Kelvin temperature
const kelvin = 0;
//line to convert kelvin to celsius
const celsius = kelvin - 273;
//line to convert celsius to fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;
//line to round down fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
//line to convert celsius to newton
let newton = celsius * (33 / 100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);