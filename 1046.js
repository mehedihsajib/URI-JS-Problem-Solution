//////////////////////////////////
// PROBLEM: Game time.
/////////////////////////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var startTime, endTime, durationOfGame;

// Taking input from test case, shouldn'n take any new line.
var stdin = lines.shift().split(" ");
startTime = parseInt(stdin.shift());
endTime = parseInt(stdin.shift());

// Calcuate duration of the game according to condition.
durationOfGame = endTime - startTime;

if (durationOfGame < 0) {
  durationOfGame = 24 + (endTime - startTime);
} if (startTime === endTime) {
  console.log("O JOGO DUROU 24 HORA(S)")
} else {
  console.log(`O JOGO DUROU ${durationOfGame} HORA(S)`);
}
