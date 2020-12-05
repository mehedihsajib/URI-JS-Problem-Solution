///////////////////////////////////
// PROBLEM: Salary.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking inputs from the test case.
var number = parseInt(lines.shift());
var hours = parseInt(lines.shift());
var amount = parseFloat(lines.shift());

// Print outputs.
console.log("NUMBER = " + number);
console.log("SALARY = U$ " + (hours* amount).toFixed(2));
