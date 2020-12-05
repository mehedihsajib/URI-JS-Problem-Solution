///////////////////////////////////
// PROBLEM: Time conversion.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

/**
 * Escreva a sua solução aqui
 * Code your solution here
 * Escriba su solución aquí
 */
 
// Taking input from test case.
var n = parseInt(lines.shift());

// Convert integer to time.
var hour = n / 3600;
var minute = n % 3600/60;
var second = n % 60;

// Print output.
console.log(parseInt(hour) + ":" + parseInt(minute) + ":" + parseInt(second));