///////////////////////////////////
// PROBLEM: Sphere.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Value of pi (constant).
var pi = 3.14159;

// Taking input from the test case.
var R = parseInt(lines.shift());

// Formula.
var volume = (4/3) * pi * (R ** 3);

// Print output.
console.log("VOLUME = " + volume.toFixed(3));