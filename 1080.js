/////////////////////////////////
// PROBLEM:  Highest and Position
/////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var i,x,n = 100, max = 0, pos = 0;

// Find highest number and it's position.
for (i = 1; i <= n; i++) {
    x = parseInt(lines.shift());
    
    if (max > x) {
        max = max;
        pos = pos;
    } else {
        max = x;
        pos = i;
    }
}

// Print outputs.
console.log(max);
console.log(pos);