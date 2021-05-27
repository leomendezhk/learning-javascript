'use strict';

/*
//Lecture 1: DEFAULT PARAMETERS
//Default values can be given in the argument of a function.
//Can use operation with using previus argument.

const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2);
createBooking('LH123', undefined, 400);
*/
////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////
/*

// Lecture 2: How to pass arguments into functions.
//Value vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Mendez',
  passport: 32432526,
};

const checkIn = function (flightNum, passenger) {
  //change given argument (usually not good to do)
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 32432526) {
    alert('Checked In!');
  } else {
    alert('Wrong passport! Try again.');
  }
};

checkIn(flight, jonas); //calling function with previus variables
console.log(flight); //this didn't change because is primitive type. The function copy it
console.log(jonas); //this change because this is same object in memory. The function take it from the memory.

//EXAMPLACE: Diferent function interacting with SAME object.
//can produce error

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas); //calling new function using same object
checkIn(flight, jonas); //calling old function same object.
//since passport was changed with new fucntion it changed the object so old function now gives dirrent error when called again.
*/
///////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

//Lecture 3: HIGHER ORDER VS FIRST CLASS

//First Class function: JS trate functions as values. So they can be stored in argumnets, variables or properties. Also can call methods on funcitons.
//Higher order are the funtions that receive or return another function.

///////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//LECTURE 4: Function Accepting Callback Function

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher-order function (because take another function in the argument)

const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformer name: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//Another examples

const highFive = function () {
  console.log('✋');
};

document.body.addEventListener('click', highFive);

['Jonas', 'Martha', 'Julia'].forEach(highFive);

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

//LECTURE 5: FUNCTION RETUR OTHER FUNCTION

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Leo');

greet('Hello')('Leo');

//Make it arrow function

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

greetArr('Hi')('Leo');

////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////

// LECTURE 6: The call and apply methods

const lufthansa = {
  airline: 'Lufthansa',
  iatacode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} fligh ${this.iatacode}${flightNum}`
    );

    this.bookings.push({ flight: `${this.iatacode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Leo Mendez');
lufthansa.book(635, 'Jonas Smith');

const eurowings = {
  name: 'Eurowings',
  iatacode: 'EW',
  bookings: [],
};

const book = lufthansa.book;
// book(23, 'Sarah Williams') . Does not work

//now this var is a function, because it copy from the method. But it's not a method related to the object lufthansa anymore. It's an independet function now, so the this keyword  inside the function doesnt relate. Will give undefined.
//So we have to manually point to were 'this' is related too (if lufthansa or eurowings) to make it work.

//Call method. pointer, flishtNum, name.
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

book.call(lufthansa, 234, 'Mary Cooper');
console.log(lufthansa);

///////////////////////////////////////////////////////////

//Created another airline with same key names if not does not work
const swiss = {
  airline: 'Swiss Air Lines',
  iatacode: 'SW',
  bookings: [],
};

//Apply method, similar to call method but need pointer, array of data

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData); //another option

//////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////
