///////////////////////////////////
// PROBLEM: Average-3.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var N1,N2,N3,N4,average,lastScore;

// Taking input from test case. Shouldn't take any new line.
var stdin = lines.shift().split(" ");
N1 = parseFloat(stdin.shift());
N2 = parseFloat(stdin.shift());
N3 = parseFloat(stdin.shift());
N4 = parseFloat(stdin.shift());

// Calculate everage and print.
average = ((N1*2 + N2*3 + N3*4 + N4*1) / 10);
console.log("Media: " + average.toFixed(1));

// Check the codition.
if (average >= 7.0) {
    console.log("Aluno aprovado.");
} else if (average >= 5.0) {
    console.log("Aluno em exame.");
    lastScore = parseFloat(lines.shift());
    console.log("Nota do exame: " + lastScore.toFixed(1));
    
    if ((lastScore+average / 2.0) > 5.0) {
        console.log("Aluno aprovado.");
    } else {
        console.log("Aluno reprovado.");
    }
    console.log("Media final: " + (lastScore+average / 2.0).toFixed(1));
} else {
    console.log("Aluno reprovado.");
}