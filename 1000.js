///////////////////////////////////
// PROBLEM: Hello world.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
   
// Taking input from the test case. 
var a = parseInt(lines.shift());
var b = parseInt(lines.shift());
   
// Print output.
console.log('X = ' + (a+b));