//////////////////////////////////
// PROBLEM: Even Numbers.
/////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Check condition and print outputs.
for (var i = 2; i <= 100; i++) {
    if (i%2 === 0) {
        console.log(i);
    }
}
