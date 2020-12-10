///////////////////////////////////
// PROBLEM: Salary Increase.
//////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential varibles.
var salary, newSalary, moneyEarned, inPercentage;

// Read input from test case.
salary = parseFloat(lines.shift());

// Calculate new slary, money earned and parcentage.
if (salary <= 400.00) {
    newSalary = salary + (salary * 0.15);
    moneyEarned = (salary * 0.15);
    inPercentage = "15 %";
} else if (salary <= 800.00) {
    newSalary = salary + (salary * 0.15);
    moneyEarned = (salary * 0.12);
    inPercentage = "12 % ";
} else if (salary <= 1200.00) {
    newSalary = salary + (salary * 0.10);
    moneyEarned = (salary * 0.10);
    inPercentage = "10 %";
} else if (salary <= 2000.00) {
    newSalary = salary + (salary * 0.07);
    moneyEarned = (salary * 0.07);
    inPercentage = "7 %";
} else {
    newSalary = salary + (salary * 0.04);
    moneyEarned = (salary * 0.04);
    inPercentage = "4 %";
}

// Print outputs.
console.log('Novo salario: ' + newSalary.toFixed(2));
console.log('Reajuste ganho: ' + moneyEarned.toFixed(2));
console.log('Em percentual: ' + inPercentage);
