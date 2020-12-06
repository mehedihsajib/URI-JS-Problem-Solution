///////////////////////////////////
// PROBLEM: Age in Days.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */

// Taking input from test case.
var days = parseInt(lines.shift())

// Formula.
const year = days / 365;
const month = days % 365 / 30;
const day = days % 365 % 30;

// Print outputs.
console.log(parseInt(year) + " ano(s)");
console.log(parseInt(month) + " mes(es)");
console.log(parseInt(day) + " dia(s)");