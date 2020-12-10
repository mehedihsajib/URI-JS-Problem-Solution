///////////////////////////////////
// PROBLEM: Triangle.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var A, B, C, perimeterOfTriangle, areaOfTrapezium;

// Taking input from test case, shouldn't take any new line.
var stdin = lines.shift().split(" ");
A = parseFloat(stdin.shift());
B = parseFloat(stdin.shift());
C = parseFloat(stdin.shift());


// Check the codition and print result.
if (A < B+C && B < A+C && C < A+B) {
    perimeterOfTriangle = A+B+C;
    console.log("Perimetro = " + perimeterOfTriangle.toFixed(1));
} else {
    areaOfTrapezium = ((A+B)*C) / 2;
    console.log("Area = " + areaOfTrapezium.toFixed(1));
}
