//////////////////////////
// PROBLEM: Interval 2.
/////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var n, x;
var inCount = 0, outCount = 0;

// Taking input from test case n.
n = parseInt(lines.shift());

// count the in and out inverval.
var i = 0;
while (i < n) {
    // Taking input x;
    x = parseInt(lines.shift());
    i++;
    
    if (x >= 10 && x <= 20) {
        inCount++;
    } else {
        outCount++;
    }
}

// Print outputs.
console.log(inCount + ' in');
console.log(outCount + ' out');
