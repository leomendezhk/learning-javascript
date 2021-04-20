'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};

/*
// LECTURE: Destructuring Arrays
//breakdown complex data into small variables.

const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

//destructuring syntax
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//Destructuring restaurant categories
//living a space in the middle to skip order

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//SWITCHING VARIABLES
//old way
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

//using destructuring
[main, secondary] = [secondary, main];
console.log(main, secondary);

///////////////////////////////////////////////////////////

//Receive 2 retun values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

////////////////////////////////////////////////////////

// Destructuring from NESTED Array

const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// console.log(i, j);

const [i, , [j, k]] = nested;
console.log(i, j, k);

///////////////////////////////////////////////////////////

//Default values
//Asigning value to an array before know the actual value
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r); // 8 9 1

///////////////////////////////////////////////////////////
*/
