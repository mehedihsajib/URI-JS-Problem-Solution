///////////////////////////////////
// PROBLEM: Area.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Value of pi (constant)
const pi = 3.14159;

// Taking input from the test case. Input shouldn't take a new line.
var stdin = lines.shift().split(' ')
var a = parseFloat(stdin.shift())
var b = parseFloat(stdin.shift())
var c = parseFloat(stdin.shift())

// Formula.
const areaOfTriangle = 0.5 * (a * c);
const areaOfCircle = pi * (Math.pow(c, 2));
const areaOfTrapezium = 1/2 * a * c + 1/2 * b * c;
const areaOfSqure = Math.pow(b, 2);
const areaOfRectangle = a * b;

// Print outputs.
console.log("TRIANGULO: " + areaOfTriangle.toFixed(3));
console.log("CIRCULO: " + areaOfCircle.toFixed(3));
console.log("TRAPEZIO: " + areaOfTrapezium.toFixed(3));
console.log("QUADRADO: " + areaOfSqure.toFixed(3));
console.log("RETANGULO: " + areaOfRectangle.toFixed(3));