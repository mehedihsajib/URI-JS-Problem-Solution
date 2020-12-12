///////////////////////////////////
// PROBLEM: Odd Numbers.
//////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var x;

// Taking input from test case.
x = parseInt(lines.shift());

// Check the condition and print output.
for (var i = 1; i <= x; i++) {
  if (i%2 !== 0) {
    console.log(i);
  }
} 
