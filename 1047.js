///////////////////////////////////
// PROBLEM: Game Time with Minutes.
//////////////////////////////////

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var initialHour,initialMin,finalHour,finalMin;
var durationOfGameHour,durationOfGameMin;

// Taking input from test case, shouldn't take any new line.
var stdin = lines.shift().split(" ");
initialHour = parseInt(stdin.shift());
initialMin = parseInt(stdin.shift());
finalHour = parseInt(stdin.shift());
finalMin = parseInt(stdin.shift());

// Calculate duration hour.
durationOfGameHour = finalHour - initialHour;
if (durationOfGameHour < 0) {
  durationOfGameHour = 24 + (finalHour-initialHour);
}

// Calculate duration min.
durationOfGameMin = finalMin - initialMin;
if (durationOfGameMin < 0) {
   durationOfGameMin = 60 + (finalMin-initialMin); 
   durationOfGameHour--;
} if (durationOfGameHour < 0) {
  // If duration < 0 (negative).
  durationOfGameHour = 24 + durationOfGameHour;
}

// In case of hour and min are the same.
if (initialHour === finalHour && initialMin === finalMin) {
  console.log('O JOGO DUROU 24 HORA(S) E 0 MINUTO(S)');
} else {
  console.log(`O JOGO DUROU ${durationOfGameHour} HORA(S) E ${durationOfGameMin} MINUTO(S)`);
}