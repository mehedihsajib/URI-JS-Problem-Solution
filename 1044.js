///////////////////////////////////
// PROBLEM: Multiples.
//////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var A,B;

// Taking input from test case, shouldn't take any new line.
var stdin = lines.shift().split(" ");
A = parseInt(stdin.shift());
B = parseInt(stdin.shift());

// Check the condition and print;
if (A%B === 0 || B%A === 0) {
    console.log("Sao Multiplos")
} else {
    console.log("Nao sao Multiplos");
}