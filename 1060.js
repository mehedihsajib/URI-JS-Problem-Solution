//////////////////////////////////
// PROBLEM: Positive Numbers.
/////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var i = 0, count = 0, numbers;

// Taking six number as a input from test case.
while (i <= 6) {
    numbers = parseFloat(lines.shift());
    i++
    
    // Count positve numbers
    if (numbers > 0) {
        count++;
    }
}

// Print output.
console.log(count + ' valores positivos');