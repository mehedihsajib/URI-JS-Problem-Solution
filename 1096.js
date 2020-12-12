/////////////////////////////////
// PROBLEM: Sequence IJ 2
/////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var I, J;

// Print sequence.
for(I = 1; I <= 9; I = I+2){
    
    for(J = 7; J >= 5; J--) {
        console.log(`I=${I} J=${J}`);
    }
}