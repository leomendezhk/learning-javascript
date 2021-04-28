'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Creater a method that return an array with the value at position given (index).
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/*  
//LECTURE: DESTRUCTURING ARRAYS 


//Destructuring is to break a complex data structure from an array or an object into separate variables.
//For arrays we use destructurig to retrieve elements from the array and store it into smaller variables.
//Even when we destructure, the original array is not afected.

//RETRIEVE DATA INTO VARIABLES.

//without destructuring.
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring syntax.
const [x, y, z] = arr;
console.log(x, y, z); // 2 3 4.

//Retrieve from 'restaurant'.
//leaving a space on the syntax skip the value of the element order.
let [main, , secondary] = restaurant.categories;
console.log(main, secondary); // Italian Vegetarian.

///////////////////////////////////////////////////////////////////

//SWITCHING VARIABLES

//without destructuring.
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary); // secondary main

//with destructuring
[main, secondary] = [secondary, main];

///////////////////////////////////////////////////////////////////

//Creating two variables out of the output of a function (order)

const [starter, mainCourse] = restaurant.order(0, 2);
console.log(starter, mainCourse); //Focaccia Risotto.

//////////////////////////////////////////////////////////////////

//NESTED  DESTRUCTURING ARRAY

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j); // 2 [5,6]
const [i, , [j, k]] = nested;
console.log(i, j, k); // 2 5 6

///////////////////////////////////////////////////////////////

//DEFAULT VALUES.
//add a default value to a variable, so in case there is no value it can use the default.
//if variable doesnt have default value it will show 'undefined'.

const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); //8 9 1 

*/
