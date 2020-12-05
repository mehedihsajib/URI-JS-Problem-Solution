///////////////////////////////////
// PROBLEM: Simple Calculate.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Taking input from the test case.
var lines1 = lines.shift().split(' ')
var code1 = parseInt(lines1.shift());
var unit1 = parseInt(lines1.shift());
var price1 = parseFloat(lines1.shift());

var lines2 = lines.shift().split(' ')
var code2 = parseInt(lines2.shift());
var unit2 = parseInt(lines2.shift());
var price2 = parseFloat(lines2.shift());

// Formula.
var VAP = parseFloat((unit1*price1)+(unit2*price2));

// Print output.
console.log('VALOR A PAGAR: R$ ' +  VAP.toFixed(2));