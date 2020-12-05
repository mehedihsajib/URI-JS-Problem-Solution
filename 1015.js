///////////////////////////////////////////
// PROBLEM: Distance between two points.
///////////////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');


// Taking inputs from test case. Shouldn't take any new line.
var stdin1 = lines.shift().split(' ');
var x1 = parseFloat(stdin1.shift());
var y1 = parseFloat(stdin1.shift());

var stdin2 = lines.shift().split(' ');
var x2 = parseFloat(stdin2.shift());
var y2 = parseFloat(stdin2.shift());

// Formula
const distance = Math.sqrt(Math.pow(x2-x1, 2) + (Math.pow(y2-y1,2)))

// Print output.
console.log(distance.toFixed(4));