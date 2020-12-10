//////////////////////////////////
// PROBLEM: Simple sort.
/////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var a, b, c, min, mid, max;

// Taking input from test case. Shouldn'n take any new line.
var stdin = lines.shift().split(" ");
a = parseInt(stdin.shift());
b = parseInt(stdin.shift());
c = parseInt(stdin.shift());

// Sort number in assending order and print.
if (a < b && a < c) {
  min = a;

  if (b < c) {
    mid = b;
    max = c;
  } else {
    mid = c;
    max = b;
  }
} else if (b < a && b < c) {
  min = b;

  if (a < c) {
    mid = a;
    max = c;
  } else {
    mid = c;
    max = a;
  }
} else {
  min = c;

  if (a < b) {
    mid = a;
    max = b;
  } else {
    mid = b;
    max = a;
  }
}

console.log(min + "\n" + mid + "\n" + max);
console.log();
console.log(a + "\n" + b + "\n" + c);