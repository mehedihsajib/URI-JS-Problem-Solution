///////////////////////////////////
// PROBLEM: Simple sum.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking inputs from the test case.
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());

// Print result.
console.log('SOMA = ' + (a+b));