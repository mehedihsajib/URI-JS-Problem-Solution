///////////////////////////////////
// PROBLEM: Distance.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking input from test case.
var distance = parseInt(lines.shift());

// Print output.
console.log((distance*2) + " minutos");