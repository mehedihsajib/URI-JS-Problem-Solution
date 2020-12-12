////////////////////////////////////////////
// Sum of Consecutive Odd Numbers I.
////////////////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var x, y, sum = 0, min, max;

// Taking input from test case.
x = parseInt(lines.shift());
y = parseInt(lines.shift());

// Check the min and max number.
if (x < y) {
  min = x;
  max = y;
} else {
  max = x;
  min = y;
}

// Calculate the sum of odd.
for (var i = min+1; i < max; i++) {
  if (i%2 !== 0) {
    sum += i;
  }
}

// print output.
console.log(sum);
