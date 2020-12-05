///////////////////////////////////
// PROBLEM: The Greatest.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


// Taking input from the test case. Input shouldn't take a new line.
var stdin = lines.shift().split(' ');
var a = parseInt(stdin.shift());
var b = parseInt(stdin.shift());
var c = parseInt(stdin.shift());

// Formula 
var maiorAB = ((a + b + Math.abs(a - b)) / 2);
// Find max using the formula.
var max = ((maiorAB + c + Math.abs(maiorAB - c)) / 2);
 
// Print output.
console.log(max + " eh o maior");