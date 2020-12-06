///////////////////////////////////
// PROBLEM: Selection test-1.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
 
// Taking input from test case. Shouldn't take any new line.
var stdin = lines.shift().split(" ");
var A = parseInt(stdin.shift());
var B = parseInt(stdin.shift());
var C = parseInt(stdin.shift());
var D = parseInt(stdin.shift());

// Checking all the condition and print.
if (B > C && D > A && C+D > A+B && C>0 && D>0 && A%2===0) {
    console.log("Valores aceitos");
} else {
    console.log("Valores nao aceitos");
}
