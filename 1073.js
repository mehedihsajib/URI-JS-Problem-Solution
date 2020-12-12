//////////////////////////
// PROBLEM: IEven Square.
/////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var x, evenSquare;

// Taking input from test case.
x = parseInt(lines.shift());

// Calculate even square and print outputs.
for (var i = 2; i <= x; i+=2) {
  evenSquare = Math.pow(i, 2);
  console.log(`${i}^${2} = ${evenSquare}`);
} 
