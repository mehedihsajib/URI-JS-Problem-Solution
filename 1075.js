//////////////////////////
// PROBELM: Remaining 2.
/////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var n;

// Taking input from test case.
n = parseInt(lines.shift());

// calculate remaining 2.
for (var i = 1; i <= 10000; i++) {
    if (i%n === 2) {
        console.log(i);
    }
}