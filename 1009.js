///////////////////////////////////
// PROBLEM: Salary with bonus.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


// Taking input from the test case.
var name = lines.shift();
var salary = parseFloat(lines.shift());
var bonus = parseFloat(lines.shift());

// Formula.
var total = (salary + (bonus*0.15));

// Print output.
console.log("TOTAL = R$ " + total.toFixed(2));