///////////////////////////////////
// PROBLEM: Animal.
//////////////////////////////////

/////////// Runtime Error ////////////


var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

// Declare essential variables.
var firstWord, secondWord, thirdWord;

// Taking inpur from test case.
firstWord = String.parseString(lines.shift());
secondWord = String.parseString(lines.shift());
thirdWord = String.parseStirng(lines.shift());

// Check the required condtion.
if (firstWord === 'vertebrado') {
  if (secondWord === "ave") {
    if (thirdWord === "carnivoro") {
      console.log('aguia');
    } if (thirdWord === 'onivoro') {
      console.log("pomba");
    }
  } if (secondWord === 'mamifero') {
    if (thirdWord === 'onivoro') {
      console.log('homem');
    } if (thirdWord === 'herbivoro') {
      console.log('lagarta');
    }
  }
} else if (firstWord === 'invertebrado') {
  if (secondWord === "inseto") {
    if (thirdWord === "hematofago") {
      console.log('pulga');
    } if (thirdWord === 'herbivoro') {
      console.log("lagarta");
    }
  } if (secondWord === 'anelideo') {
    if (thirdWord === 'hematofago') {
      console.log('sanguessuga');
    } if (thirdWord === 'onivoro') {
      console.log('minhoca');
    }
  }
} 





// Solution-2 
if (firstWord === 'vertebrado' && secondWord === 'ave' && thirdWord === 'carnivoro') {
    console.log('aguia');
} else if (firstWord === 'vertebrado' && secondWord === 'ave' && thirdWord === 'onivoro') {
    console.log('pomba');
} else if (firstWord === 'vertebrado' && secondWord === 'mamifero' && thirdWord === 'onivoro') {
    console.log('homem');
} else if (firstWord === 'vertebrado' && secondWord === 'mamifero' && thirdWord === 'herbivoro') {
    console.log('vaca');
} if (firstWord === 'invertebrado' && secondWord === 'inseto' && thirdWord === 'hematofago') {
    console.log('pulga');
} else if (firstWord === 'invertebrado' && secondWord === 'inseto' && thirdWord === 'herbivoro') {
    console.log('lagarta');
} else if (firstWord === 'invertebrado' && secondWord === 'anelideo' && thirdWord === 'hematofago') {
    console.log('sanguessuga');
} else if (firstWord === 'invertebrado' && secondWord === 'anelideo' && thirdWord === 'onivoro'){
    console.log('minhoca');
}
