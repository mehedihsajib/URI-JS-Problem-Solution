///////////////////////////////////
// PROBLEM: Extremly basic.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8')
var lines = input.split('\n')

// Value of pi (constant).
var pi = 3.14159

// Taking input from the test case.
var r = parseFloat(lines.shift())

// Formula
r = r.toFixed(2)

// Print output.
console.log('A=' + (pi*(Math.pow(r,2))).toFixed(4))