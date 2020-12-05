///////////////////////////////////
// PROBLEM: Average-1.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking inputs from the test case.
var a = parseFloat(lines.shift()).toFixed(1);
var b = parseFloat(lines.shift()).toFixed(1);

// Formula.
var med = ((a*3.5) + (b*7.5))/(3.5 + 7.5);

// Print output.
console.log("MEDIA = " + med.toFixed(5));