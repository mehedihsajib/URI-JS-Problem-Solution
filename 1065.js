//////////////////////////////////////
// PROBLEM: Even Between five Numbers
//////////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var number, count = 0;

// Taking six number as a input from test case.
var i = 0;
while (i <= 5) {
    numbers = parseInt(lines.shift());
    i++
    
    // Count even numbers
    if (numbers%2 === 0) {
        count++;
    }
}

// Print output.
console.log(count + ' valores pares');