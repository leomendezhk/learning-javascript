/*
// LECTURE : Variable names conventions
let myFirstJob = 'Programmer';
let leo_matilda = 'JM';
let $function = '27'; 
let person = 'leo';
let PI = 3.1415; //constant (value doesnt change)
console.log(myFirstJob); 
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Data types 'Boolean'
let javascriptIsFun = true;
console.log(javascriptIsFun);

console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof 'javascriptIsFun');

// Dynamic Typing: change value type of string
// in this case from boolean to string
javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);

// Undefined data type: declare variable without value
let year;
console.log(year);
console.log(typeof year);

// assign value to variable
year = 1994;
console.log(year);
console.log(typeof year);

////////////////////////////////////////////////////////////////////////////

// LECTURE: cons, let and var
// types of variables

let age = 30; //can mutate/change
age = 31;

const birthYear = 1994; //can't mutate
var job = 'programmer'; //old way
*/
////////////////////////////////////////////////////////////////////////////
/*
//LECTURE: Operators
//Mathematical operators
const now = 2037;
const ageJonas = now - 1991;
const ageBeth = now - 2001;
console.log(ageJonas, ageBeth);

console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

const firstName = 'Leo';
const lastName = 'Mendez';
console.log(firstName + ' ' + lastName);

//Assignment operators
let x = 10 + 5;
x += 10;// x = x + 10 = 25
x *= 4;// x = x * 4 = 100 
x++ // x + 1 = 101
x--;
x--; //x - 1 = 99
console.log(x);

// Comparison operators, for boolean
console.log(ageJonas > ageBeth);
console.log(ageJonas <= ageBeth);

const isFullAge = ageBeth >= 36;
console.log(isFullAge);

console.log(now - 1991 > now - 2001);

// Operator procedence
// operators has hierarchy of execution

// const averageAge = ageJonas + ageBeth / 2;
const averageAge = (ageJonas + ageBeth) / 2;
console.log(averageAge);
*/

////////////////////////////////////////////////////////////////////////////

/*
//lECTURE: Strings and template literal
//Easy way writing strings using `` and ${variable}
*/

////////////////////////////////////////////////////////////////////////////

/*
//LECTURE: IF ELSE statement
age = 19;

if (age >= 18) {
  console.log(`You are allowed to get a license! 🏎`)
};

age = 15 
if (age >= 18) {
  console.log(`You are allowed to get a license! 🏎`);
} else {
    console.log(`Your aren't allowed, wait ${18 - age} years`);
}

// add empty variable
const birthYear = 1991;

let century
if (birthYear <= 2000) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Type convertion and Coercion
// Type convertion converts manually.
// Type coercion JS do it for us.
// Can conver to number to string to boolean.
// White color is string, number is purple.

const inputYear = '1991';
console.log(inputYear + 18)
console.log(Number(inputYear), inputYear);
console.log(Number(inputYear) + 18);

// Invalid number NaN
console.log(Number('Jonas'));

// Type coercion
// - / * > trigger to number
// + trigger to string
console.log('i am ' + 23 + ' years ');
console.log('10 ' - 23 - ' 13 ');

let n = '1' + 1; // '11'
n = n - 1; // 11 - 1 
console.log(n);

console.log(2+2+2+'2'); // 62
console.log(10-1-1+'1') //81
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Trusty and Falsy value (Boolean)
//there are 5 values always resulte false: 0, '', null, undefined, NaN.

//Conversion
console.log(Boolean(0)); //false
console.log(Boolean('Jonas')) //true

//Coercion
//JS always do it for us in IF Else statement
const money = 0;
if (money) {
  console.log("Don't spend it all");
} else {
  console.log(`Get a job`);
}
//Money equal 0, 0 is falsy, so else run.
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Equality operators
const age = '18';
if (age === 18) console.log('You are at adult age');
if (age == 18) console.log('You are not adult age');

//promt: to ask user give a value
const favorite = Number(prompt("What's your favorite age?"));
console.log(favorite);

// else if can be used infinite
if (favorite === 23) {
  console.log('That is a nice age');
} else if (favorite === 7) {
  console.log('That is a young age');
} else {
  console.log('Your number is not 7 or 23');
}

if (favorite !== 23) console.log('Awesome');
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Logical Operators
// && and, || or, !not 

const hasDriverLicense = true;
const hasGoodVision = true;

console.log(hasDriverLicense && hasGoodVision);
console.log(hasDriverLicense || hasGoodVision);
console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//   console.log('Sarah is available to drive!');
// } else {
//   console.log('Someone else should drive');
// }

const isTired = false;

if (hasDriverLicense && hasDriverLicense && !isTired) {
  console.log('Sarah can drive!');
} else {
  console.log('Someone else should drive');
}
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE:  The switch statement
// Easier way to execute code by proposing values

const day = 'monday';

switch (day) {
  case 'monday': // day === 'monday'
    console.log('Workout A');
    console.log('Do Yoga');
    break; //it stop execute code
  case 'tuesday':
    console.log('Workout B');  
    console.log('Run');
    break;
  case 'wednesday':
  case 'thursday':
    console.log('Meditate');
    break;
  default: // in case any value is on the cases
    console.log('Not valid day');  
}

if (day === 'monday') {
  console.log('Workout A');
  console.log('Do Yoga');
} else if (day === 'tuesday') {
  console.log('Workout B');  
  console.log('Run');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('Meditate');
} else {
  console.log('Not valid day');
}
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Expression & Statement
//An Expression is a piece of code that produce some value:

2 + 2
1991 //numbers
true && false && !false //bolean
strings

// An Statement is a piece of code that declare something, like a if else

if ( 23 > 10 ) {
  console.log('23 is bigger');
}
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: The conditional (ternary) operator
//It's used to produce an expression like writting less code than an if else statement

const age = 23;

// age >= 18 ? console.log('wine') : console.log('water');

const drink =  age >= 18 ? 'wine' : 'water';
console.log(drink);

//Can be used in template as expession
console.log(`I'd like to drink ${age >= 18 ? 'wine' : 'water'}`);
*/
