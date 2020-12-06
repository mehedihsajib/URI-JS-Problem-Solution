///////////////////////////////////
// PROBLEM: Bhaskara's Formula.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential varibles.
var a,b,c,m,r1,r2;

// Taking input from test case. Shouldn't take any new line.
var stdin = lines.shift().split(" ");
a = parseFloat(stdin.shift());
b = parseFloat(stdin.shift());
c = parseFloat(stdin.shift());

// Checking calcular possible or not.
m = Math.pow(b,2) - 4*a*c;
if (m < 0) {
	// if not possible.
    console.log("Impossivel calcular");
} else if (a === 0) {
	// if not possible.
    console.log("Impossivel calcular");
} else {
	// if possible.
    r1=((-b) + Math.sqrt(m))/(a+a);
    r2=((-b) - Math.sqrt(m))/(a+a);
    
    console.log("R1 = " + r1.toFixed(5));
    console.log("R2 = " + r2.toFixed(5));
}