// LECTURE: Stric Mode
//It help me to find bugs and write better code. Goes in the first line of code.
'use strict';

/////////////////////////////////////////////////////////////////////

/*
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
*/

/////////////////////////////////////////////////////////////////////
/*
//LECTURE: FUNCTION DECLARATION AND EXPRESSION
//Funcion store values and like any value we can store it on a variable.
//What is the main difference between declaration and expression?
//Its that function declaration can be called before write the function

//Function Declaration
const age1 = calcAge1(1994); //called before

function calcAge1(birthYear) {
  return 2021 - birthYear;
}

console.log(age1);

//Function Expression
// create a variable to store the fuction

const calcAge2 = function (birthYear) {
  return 2021 - birthYear;
}

const age2 = calcAge2(1994); //called after
console.log(age2);

//Which type of fuction is better to use? 
//Depens of me, function expression obligate me to write the fuction before colled it and also can be stored in variable, so It may be more organized use function expression.
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: ARROW FUNCTION
//Simples way to write a function 
//idealy when fuction is just one line of code

const calcAge3 = birthYear => 2021 - birthYear;
const age3 = calcAge3(1994);
console.log(age3);

//Essenario when there is more than one line of code

const yearUntilRetirement = (birthYear, firstName) => {
  const age = 2021 - birthYear; //first calc current age
  const retirement = 65 - age; // then calc retirement
  return `${firstName} retires in ${retirement} years`;
}

console.log(yearUntilRetirement(1994, 'Leo'));
console.log(yearUntilRetirement(1998, 'Alan'));
*/

/////////////////////////////////////////////////////////////////////
/*
//LECTURE: Calling another Function
//A function inside another function

const cutFruitPieces = function(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples,oranges) {
  const applesPieces = cutFruitPieces(apples);
  const orangesPieces = cutFruitPieces(oranges);
  
  const juice = `Juice with ${applesPieces} apple pieces and ${orangesPieces} orange pieces.`;
  return juice;
}

console.log(fruitProcessor(2, 3));
*/

/////////////////////////////////////////////////////////////////////

/*
// LECTURE: Reviewing Functions
// Parameters are like local variables only to it function, even if there is parameters with same name, they are not related
//return exit the function, so should be place at end
//Can add if else inside funcion

const calcAge = function(birthYear){
  return 2021 - birthYear;
}; 

const yearUntilRetirement = function(birthYear, firstName) {
  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retired!`);
    return -1;
  }
}

console.log(yearUntilRetirement(1970, 'Jonas'));
console.log(yearUntilRetirement(1994, 'Leo'));
*/ 

/////////////////////////////////////////////////////////////////////





