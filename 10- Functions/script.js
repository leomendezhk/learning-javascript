'use strict';

/*
//Lecture: DEFAULT PARAMETERS
//Default values can me given in the argument of a function.
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

// Lecture: How to pass arguments into functions.
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
console.log(jonas); //this change because this is same object in memory. The function tale it from the memory.

//EXAMPLACE: Diferent function interacting with SAME object.
//can produce error

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000000);
};

newPassport(jonas); //calling new function using same object
checkIn(flight, jonas); //calling old function same object.
//since passport was changed with new fucntion it changed the object so old function now gives dirrent error when called again.
