////////////////////////////////
// PROBLEM: Multiplication Table.
////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var n, mul;

// Taking input from test case.
n = parseInt(lines.shift());

// Calculate multiplication.
for (var i = 1; i <= 10; i++) {
    mul = i*n;
    console.log(`${i} x ${n} = ${mul}`);
}