/////////////////////////////////
// PROBLEM: Sequence IJ 1
/////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var i, j;

// Print sequence.
for(I = 1, J = 60;J >= 0; I = I+3, J = J-5) {
    console.log(`I=${I} J=${J}`);
}