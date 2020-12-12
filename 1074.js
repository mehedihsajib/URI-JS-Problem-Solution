//////////////////////////
// PROBLEM:  Even or Odd.
/////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var n, x;

// Taking size of input number.
n = parseInt(lines.shift());

// Check condition and print outputs.
var i = 0;
while (i <= n) {
    // Taking n number of input.
    x = parseInt(lines.shift());
    i++;
    
    // Chekc condition.
    if (x === 0) {
        console.log('NULL');
    } else if (x < 0 && x%2 === 0) {
        console.log('EVEN NEGATIVE');
    } else if (x < 0 && x%2 !== 0) {
        console.log('ODD NEGATIVE');
    } else if (x > 0 && x%2 === 0) {
        console.log('EVEN POSITIVE');    
    } else if (x > 0 && x%2 !== 0) {
        console.log('ODD POSITIVE');    
    
    }
}