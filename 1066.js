/////////////////////////////////////////////
// PROBLEM: Even, Odd, Positive and Negative
/////////////////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var numbers, evenCount = 0, oddCount = 0, positiveCount = 0, negativCount = 0;

// Taking six number as a input from test case.
var i = 1;
while (i <= 5) {
    numbers = parseInt(lines.shift());
    i++;
    
    // Count numbers.
    if (numbers%2 === 0) {
        evenCount++;
    } if (numbers%2 !== 0) {
        oddCount++;
    } if (numbers > 0) {
        positiveCount++;
    } if (numbers < 0) {
        negativCount++;
    }
}

// Print output.
console.log(evenCount + ' valor(es) par(es)');
console.log(oddCount + ' valor(es) impar(es)');
console.log(positiveCount + ' valor(es) positivo(s)');
console.log(negativCount + ' valor(es) negativo(s)');