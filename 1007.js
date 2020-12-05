///////////////////////////////////
// PROBLEM: Difference.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking inputs from the test case.
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
var c = parseInt(lines.shift());
var d = parseInt(lines.shift());

// Formula.
var diff = (a*b) - (c*d);

// Print output.
console.log("DIFERENCA = " + diff);