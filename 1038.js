///////////////////////////////////
// PROBLEM: Snack.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var porductCode, quantity, amountToPay;

// Taking input from test case. Shouldn't take any new line.
var stdin = lines.shift().split(' ');
porductCode = parseInt(stdin.shift());
quantity = parseInt(stdin.shift());

// Check the condition.
if (porductCode === 1) {
    amountToPay = (4.00*quantity);
} else if (porductCode === 2) {
   amountToPay = (4.50*quantity);
} else if (porductCode == 3) {
     amountToPay = (5.00*quantity);
} else if (porductCode === 4) {
   amountToPay = (2.00*quantity);
} else {
     amountToPay = (1.50*quantity);
}

// Print output.
console.log("Total: R$ " + amountToPay.toFixed(2));
