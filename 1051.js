//////////////////////////////////
// PROBLEM: Taxes.
/////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var salary, taxToPay;

// Taking input from test case.
salary = parseFloat(lines.shift());

// Check the condition and calcualte tax.
if (salary >= 0 && salary <= 2000) {
  console.log('Isento');
} else if (salary > 2000.01 && salary <= 3000) {
  salary -= 2000;
  taxToPay = (salary * .08);
  console.log('R$ ' + taxToPay.toFixed(2));
} else if (salary > 3000.01 && salary <= 4500) {
  salary -= 3000;
  taxToPay = (salary * .18) + 80;
  console.log('R$ ' + taxToPay.toFixed(2));
} else {
  salary -= 4500;
  taxToPay = (salary * .28) + 350;
  console.log('R$ ' + taxToPay.toFixed(2));
}