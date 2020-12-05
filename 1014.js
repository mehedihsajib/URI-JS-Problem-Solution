///////////////////////////////////
// PROBLEM: Consumption.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking input from test case.
var X = parseInt(lines.shift());
var Y = parseFloat(lines.shift());

// Calculate the spent fuel for per km.
var spentFuel = X / Y;

// Print output.
console.log(spentFuel.toFixed(3) + " km/l");