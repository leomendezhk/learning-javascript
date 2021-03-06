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

/*
//LECTURE: ARRAYS
//Arrays are like big containers which I can throw variales to later reference them

// How to create an array?
const friends = ['Michael', 'Leo', 'James'];
//or
const year = new Array(1994, 1995, 1996);

//To call it..
console.log(friends[0]);
console.log(friends[2]);

// To know how many data is in the array I can use length
console.log(friends.length);
//or use it to call as well
console.log(friends[friends.length -1]); //3 - 1 is 2, 2 is the place of james since arrays count from 0.

// Change or mutate a data of the array.
friends[0] = 'Basti';
console.log(friends);
//I can't change all the data of the array, just selected individual.

// Arrays can take any expression that produces a value (function, operators, strings, another arrays)
const firstName= 'Leo';// this is a function
const leo = [firstName, 'Mendez', 2021 - 1994, friends];
console.log(leo);

//How to use Arrays and Functions?
//Exercise

//function to calculate age
const calcAge = function(birthYear) {
  return 2021 - birthYear; 
}

//array to place years
const years = [1990, 1991, 1992, 1993];
//variable using the function with array as argument
const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
//calling results
console.log(age1, age2, age3);

//another way is taking the call in array (since produce a value)
const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];

//calling the array
console.log(ages);
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: ARRAY METHODS
//are like array operations basically

const friends = ['Dima', 'James', 'Gilly'];

// ADD element
friends.push('Basti'); //end of array
// const newFriend = friends.push('Basti'); another way to add is creating a variable to store new modification
console.log(friends);

friends.unshift('Leo'); //beggining of array
console.log(friends);

//REMOVE element

friends.pop(); //last element
console.log(friends);
const popped = friends.pop(); //remove again last element but I created a variable to store it
console.log(popped); //show the one removed

friends.shift(); //remove first element
console.log(friends);

// SHOW position of element

console.log(friends.indexOf('Dima'));
console.log(friends.indexOf('Carlos')); //not in array so shows -1

//Ask if element is in array
console.log(friends.includes('Dima'));
console.log(friends.includes('Carlos')); //false

if (friends.includes('Dima')) {
  console.log(`You have a friend called ${friends[0]}`);
}

*/

/////////////////////////////////////////////////////////////////////

// LECTURE: Objects
//Another way to process data. Assigning a Key name to a value.
//Using curly brackets, colon and coma.
//Unstructure way, doesnt matter order of data.
//Can use any expression as value (string, number, function, arrays).

// const leo = {
//   firstName: 'Leo',
//   lastName: 'Mendez',
//   age: 2021 - 1994,
//   friends: ['Dima', 'Gilly', 'Fabi']
// }

/////////////////////////////////////////////////////////////////////
/*

// LECTURE: Dot & Bracket notation

// How to retrieve an object?
//using dot .
console.log(leo.firstName);

//or concatonate with brackets
const keyName = 'Name';
console.log(leo['first' + keyName]);
console.log(leo['last' + keyName]);

// by user imput: prompt

// // const interestedIn = prompt(`What do you want to know about Leo? Choose between firstName, lastName, age and friends.`)

// if (leo[interestedIn]) {
//   console.log(leo[interestedIn]);
// } else {
//   console.log(`Wrong request!. Choose between firstName, lastName, age and friends.`)
// }

//How to ADD a new property?
leo.location = 'Hong Kong';
leo['job'] = 'Model';
console.log(leo);

// CHALLENGE 
console.log(`${leo.firstName} has ${leo.friends.length} friends, and his best friend is ${leo.friends[0]}`);

*/
/////////////////////////////////////////////////////////////////////
/*

// LECTURE: Object Method
//any function that is attach to an object is called method
//Using 'this': which is a variable that is equal to the object name.
//why? so if I change object name I dont need change everywhere.

const leo = {
  firstName: 'Leo',
  lastName: 'Mendez',
  birthYear: 1994,
  job: 'model',
  friends: ['Dima', 'Gilly', 'Fabi'],
  hasDriverLicense: false,

  calcAge: function() {
    this.age = 2021 - this.birthYear;
    return this.age;
  },

  //Challenge
  getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()} old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`;
  }
}

console.log(leo.calcAge());
console.log(leo.age)

//Challenge
console.log(leo.getSummary())

*/
/////////////////////////////////////////////////////////////////////
/*

//LECTURE: for Loop
//To repeat a iteration/code

//for loop keeps running while condition is TRUE
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep}`)
}

*/
/////////////////////////////////////////////////////////////////////
/*

// LECTURE: Looping Arrays

const leo = [
  'Leo',
  'Mendez',
  27,
  ['Dima', 'James', 'Basti'],
  'Model'
]

const types = [] //empty array to be filled

//i is the usual name for variables in loops
// = 0 because arrays elements counting start from 0 not 1

for (let i = 0; i < leo.length; i++) {
  console.log(leo[i], typeof leo[i]);
  
  // Filling empty array
  // types[i] = typeof leo[i];
  types.push(typeof leo[i]);
}

console.log(types);

// Challenge: Calculate age using loop

const years = [1994, 1995, 1996, 1997];
const ages = [];

for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}

console.log(ages);

//Continue & Break statements for loop

console.log(`---ONLY STRINGS---`);
for (let i = 0; i < leo.length; i++) {
  if (typeof leo[i] !== 'string') continue;

  console.log(leo[i], typeof leo[i])
}

console.log(`---BREAK WITH NUMBER---`);
for (let i = 0; i < leo.length; i++) {
  if (typeof leo[i] === 'object') break;

  console.log(leo[i], typeof leo[i]);
}

*/
/////////////////////////////////////////////////////////////////////
/*

// LECTURE: Looping backwards and loop inside a loop

//Looping Backwards
const leo = [
  'Leo',
  'Mendez',
  27,
  ['Dima', 'James', 'Basti'],
  'Model'
]

//notice conditions
for (let i = leo.length-1; i >= 0; i--) {
  console.log(i, leo[i]);
}

//Loop inside loop
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`----Exercise number ${exercise}`);

  for (let repetition = 1; repetition < 6; repetition++) {
    console.log(`repetition number ${repetition}?????????????`)
  }
}

*/
//////////////////////////////////////////////////////////////////////
/*

// LECTURE: While Loop
//while the condition is true, it will run the code.

// for (let rep = 1; rep <= 10; rep++) {
//   console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
  // console.log(`WHILE: Lifting weights repetition ${rep}`);
  rep++;
}

//Example that don't depends on the counter but will depend on the variable
//Run dice until until is 6. I don't know when 6 will appear, so dont need counter, the loop will stop when the random number is 6.

//Math.random will give a random number between 0 and 1 (using decimals)
//Math.truc remove the decimal on Math.random
//* 6 said that the random number will be until 5 (sicne start in 0);
//+ 1 add 1 so it get to 6
//basically this create a  variable random number between 0 and 6
let dice = Math.trunc(Math.random() * 6) + 1;

//this condition check if that number is different than 6, if condition is true, it will run the loop, if number is 6 will not run.
//create another number so loop dont became infinite and crash browser
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1; 
  if (dice === 6) console.log(`Loop is about to end...`)
}

*/
