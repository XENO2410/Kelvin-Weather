// value saved to kelvin will stay constant
const kelvin = 0;

// value saved to celsius will stay constant
const celsius = kelvin-273;

//calculate Fahrenheit
let fahrenheit = celsius * (9 / 5) + 32;

//calculate Newton
let Newton = celsius*(33/100);

//When you convert from Celsius to Fahrenheit, you often get a decimal number. using floor func to solve this
fahrenheit = Math.floor(fahrenheit);
Newton = Math.floor(Newton);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
console.log(`The temperature is ${Newton} degrees Newton.`);
