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

  //Order Pasta function
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Your pasta with ${ing1}, ${ing2}, ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//LECTURE: NULLISH ??
//consider only null or undefines (NOT '' or 0)
//only if value is null or undefined it continues
//in the example the evaluation is 0, so return 0. if it were undefined it will return 10

restaurant.numGuests = 0;
const guest2 = restaurant.numGuests ?? 10;
console.log(guest2);

/////////////////////////////////////////////////////////////////////
/*

// LECTURE: REST PATTERN & REST PARAMETERS

//rest goes on the left of = , and spread on the right.
//rest is always the last value and doesnt count skipped elements

const [pizza, , rissoto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissoto, otherFood);

//Objects
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//Functions REST
//take multiple values and packet into arrays

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(1, 2, 3);
add(4, 1, 2, 5, 6, 7);
add(1, 2, 2, 3, 5, 7, 8, 9);

const x = [2, 3, 4];
add(...x);

restaurant.orderPizza('mushroom', 'tomato', 'pineapple', 'spinach');
restaurant.orderPizza('mushroom'); //empty array for other argument
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: SHORT-CIRCUITING

//or ||

//Use ANY data type, return ANY data type, short-circuiting
//returm first true value 
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(undefined || null);

// restaurant.numGuests = 24;
const guest1 = restaurant.numGuests ? restaurant.numGuests : 10;
console.log(guest1);
//or use short-circuiting instead
const guest2 = restaurant.numGuests || 23;
console.log(guest2);

//AND &&
//return the falsy value or the last true value if all values are true

console.log(3 && 'Leo');
console.log(null && 2);
console.log(23 && 'hello' && '' && undefined);

//Practical example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}
//easier way to check if exist and order
restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spinach');

*/
//////////////////////////////////////////////////////////////////////////
/*
// LECTURE: THE SPREAD OPERATOR ...
const arr = [7, 8, 9];
const arrBad = [1, 2, arr[0], arr[1], arr[2]];
console.log(arrBad);

const arrGood = [1, 2, ...arr];
console.log(...arrGood); //individuals
console.log(arrGood); //in array

// create new array with added more options
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//Copy array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

//Join two array
const twoMenu = [...mainMenuCopy, ...newMenu];
console.log(twoMenu);

//Iterables: array, string, maps, sets. NOT objects.
const str = 'Leo';
const letters = [...str, , '.St'];
console.log(letters);
console.log(...str);

//Real world example order pasta
// const ingredients = [
//   prompt("Let's make pasta! ingredient 1?"),
//   prompt('ingredient 2?'),
//   prompt('ingredient 3?'),
// ];

// restaurant.orderPasta(...ingredients);

//Objects
const newRestaurant = {
  founded: 1994,
  ...restaurant,
  founder: 'Carlo Ppepotti',
};
console.log(newRestaurant);
newRestaurant.name = 'Las Cholas';
console.log(newRestaurant.name);
console.log(restaurant.name);
*/

///////////////////////////////////////////////////////////
/*
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

*/
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
