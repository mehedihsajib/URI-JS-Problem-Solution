///////////////////////////////////
// PROBLEM: Coordinates of a Point.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Decare essential varibles.
var x,y;

// Taking input from test case. Shouldn't take any new line.
var stdin = lines.shift().split(" ");
x = parseFloat(stdin.shift());
y = parseFloat(stdin.shift());

// Check the condition and print.
if (x === 0 && y === 0) {
    console.log("Origem");
} else if (y === 0) {
     console.log("Eixo X");
} else if (x === 0) {
    console.log("Eixo Y");
} else if (x > 0 && y > 0) {
    console.log("Q1");
} else if (x < 0 && y > 0) {
    console.log("Q2");
} else if (x < 0 && y < 0) {
    console.log("Q3");
} else {
    console.log("Q4");
}