///////////////////////////////////
// PROBLEM: Month.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var numberOfMonth;

// Taking input from test case.
numberOfMonth = parseInt(lines.shift());

// Check the condition and print.
switch(numberOfMonth) {
  case 1: 
    nameOfMonth = 'January';
    break;
  case 2: 
    nameOfMonth = 'February';
    break;
  case 3: 
    nameOfMonth = 'March';
    break;
  case 4: 
    nameOfMonth = 'April';
    break;
  case 5: 
    nameOfMonth = 'May';
    break;
  case 6: 
    nameOfMonth = 'June';
    break;
  case 7: 
    nameOfMonth = 'July';
    break;
  case 8: 
    nameOfMonth = 'August';
    break;
  case 9: 
    nameOfMonth = 'September';
    break;
  case 10: 
    nameOfMonth = 'October';
    break;
  case 11: 
    nameOfMonth = 'November';
    break;
  case 12: 
    nameOfMonth = 'December';
    break;
}

// print output.
console.log(nameOfMonth);