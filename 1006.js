///////////////////////////////////
// PROBLEM: Average-2.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking inputs from the test case.
var a = parseFloat(lines.shift()).toFixed(1);
var b = parseFloat(lines.shift()).toFixed(1);
var c = parseFloat(lines.shift()).toFixed(1);

// Formula.
media = (a/10 * 2) + (b/10 * 3) + (c/10 * 5);

// Print output.
console.log("MEDIA = " + media.toFixed(1));