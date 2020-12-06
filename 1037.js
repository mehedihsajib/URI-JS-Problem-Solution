///////////////////////////////////
// PROBLEM: Interval.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var num;

// Taking input from test case.
num = parseFloat(lines.shift());

// Check the condition.
if (num < 0 || num > 100) {
    console.log("Fora de intervalo");
} else {
  if (num >= 0 && num <= 25){
    console.log("Intervalo [0,25]");
  } else if (num > 25 && num <= 50){
    console.log("Intervalo (25,50]");
  } else if (num > 50 && num <= 75){
    console.log("Intervalo (50,75]");
  } else {
    console.log("Intervalo (75,100]");
  }
}