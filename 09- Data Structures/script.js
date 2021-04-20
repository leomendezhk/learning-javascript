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

  //function with object as argument
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 1,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time} `
    );
  },
};

//calling function objects
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del Sole 351',
  mainIndex: 2,
  starterIndex: 2,
});

//calling Using default values
restaurant.orderDelivery({
  address: 'Via del Sole 351',
  starterIndex: 1,
});

// LECTURE: DESTRUCTURING OBJECTS
//Specific name, doest matter order and use curly brace

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//changing name variables
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//Setting defaul values
const { menu = [], starterMenu = (starters = []) } = restaurant;
console.log(menu, starterMenu);

//Mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 1 };
({ a, b } = obj); //use parentesis to avoid error
console.log(a, b);

//Nested Objects

const {
  fri: { open, close },
} = openingHours;
console.log(open, close);

///////////////////////////////////////////////////////////
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
