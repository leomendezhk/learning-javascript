// LECTURE: Stric Mode
//It help me to find bugs and write better code. Goes in the first line of code.
'use strict';

/////////////////////////////////////////////////////////////////////

// LECTURE: FUNCTION
// They allow us to call line of code many times during our program

function logger() {
  console.log(`My name is Leo`);
}

// calling / running / invoking function
logger();
logger();
logger();

// Example using parameters apples and oranges
//Paramenters are like empty spaces or variables that need to be fill with a argument/value
function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`; //create variable juice to store the funcion
  return juice;
}

// Create a variable and give value/argument to parameters
const appleJuice = fruitProcessor (5, 0);
console.log(appleJuice);

const applesOrangesJuice = fruitProcessor (2, 3);
console.log(applesOrangesJuice); 

/////////////////////////////////////////////////////////////////////

