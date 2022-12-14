//Numbers
const myNumber = 42;

console.log(myNumber)

const myFloat= 42.23

const myString = "42";

console.log(myString === myNumber);
console.log(myString + 3);
console.log(Number(myString) + 3);
console.log(Number(myString) === myNumber);
//NaN --> Not a Number
//The Number.isInteger() method determines whether the passed value is an integer

console.log(Number.isInteger(myString));

//The Number.parseFloat() method parses an argument and returns a floating point number. If a number cannot be parsed from the argument, it returns NaN.

console.log(Number.parseFloat(myFloat));

//Thr toFixed() method formats a number according to how many decimal points you provide as the parameter.

console.log(myFloat.toFixed(1));

//The Number.parseInt() method parses a string argument and returns an integer

console.log(Number.parseInt(myString));

//The toString() method returns a string representing the number

console.log(typeof Number.parseFloat(myString));

//The chaining method is by using several methods chained together

console.log(Number.parseFloat("42.3adf").toFixed(2).toString());
//Here this chaining is not required because toFixed is already considered as a string

//The Number.isNaN() method determines whether the passed value is NaN and its type is Number

console.log(Number.isNaN("ME"));

//Global isNaN() function determines whether a value is NaN or not.

console.log(isNaN("ME"));