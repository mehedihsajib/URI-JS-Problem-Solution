///////////////////////////////////
// PROBLEM: Fuel Spent.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


// Taking input from test case.
var time = parseInt(lines.shift());
var averageSpeed = parseInt(lines.shift());

// Fomula (spent fuel)
const spentFuel = (time*averageSpeed)/12;

// Print output
console.log(spentFuel.toFixed(3));