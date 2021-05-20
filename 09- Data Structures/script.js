'use strict';

//CHALLENGE #2

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

//1.
const events = [new Set(gameEvents.values())];
console.log(events);

//2
gameEvents.delete(64);

//3

console.log(`An event happened, on
average, every ${90 / gameEvents.size} minutes`);

//4
for (const [time, value] of gameEvents) {
  const gameTime = time <= 45 ? `FIRST` : `SECOND`;
  console.log(`[${gameTime} HALF] ${time}: ${value}`);
}

///////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////
/*

//LECTURE: MAPS ITERATION

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
};

//To add multiple elements to a Map better than use set, I can use Array of arrays

//Example creating a quiz game

const question = new Map([
  ['question', 'What the best programming language for web?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Corrent 🎉'],
  [false, 'Try again!'],
]);

console.log(question);

////////////////////////////////////////////////////

//Convert Object to Maps

console.log(Object.entries(restaurant.openingHours));
const hoursMap = new Map(Object.entries(restaurant.openingHours));

console.log(hoursMap);

////////////////////////////////////////////////////

//Quiz app

console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}: ${value}`);
}

// const answer = Number(prompt('Your answer:'));
const answer = 3;
console.log(answer);

console.log(question.get(question.get('correct') === answer));

/////////////////////////////////////////////////////

//Convert map to array

console.log([...question]);
console.log([...question.keys()]);
console.log([...question.values()]);

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/*
//LECTURE: MAPS
//It's a data structure that link/map values to keys.
//Can use any data type. Not like Object that only use strings.

const rest = new Map(); // best use it empty.

rest.set('name', 'Clasico Italiano');
rest.set(1, 'Spain');
console.log(rest.set(2, 'Portugal')); //return the full map

//It can be chained
rest
  .set('open', 11)
  .set('close', 23)
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');

//////////////////////////////////////////////////////
//Use get to read data

console.log(rest.get('name'));
// console.log(rest.get(true));

//Example: using current time to ask if its open or closed

const time = 20; //current time
console.log(rest.get(time > rest.get('open') && time < rest.get('close'))); // = rest.get(boolean)

///////////////////////////////////////////////////

//Maps methods

console.log(rest.has('categories'));
rest.delete(2);
// rest.clear();
console.log(rest.size);
console.log(rest);

////////////////////////////////////////////////

//Using ARRAY and OBJECTS in MAPS

const arr = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));

rest.set(document.querySelector('h1'), 'Heading');

//////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/*
// LECTURE: SETS
//It's a collection of unique values.
//It's a iterable (can be used for looping and contain other iterables )
//Set can never have duplicated. It delete the duplicates.
//Cannot retrieve index or values out of a set.
//The order is irrelevant.

const ordersSet = new Set([
  'Pizza',
  'Tomato',
  'Garlic Bread',
  'Pizza',
  'Pizza',
  'Rissoto',
]);

console.log(ordersSet); //remove duplicates
console.log(new Set('Leo')); //can create set of string or any iterable.
console.log(ordersSet.size); //know the lenght
console.log(ordersSet.has('Rissoto')); //can ask if has value
ordersSet.delete('Tomato');
ordersSet.add('Lasagna');
ordersSet.add('Lasagna');
// ordersSet.clear() //delette all values.
console.log(ordersSet);

////////////////////////////////////////////////////

//Can use looping
for (const order of ordersSet) console.log(order);

///////////////////////////////////////////////////

//The main use of SETS is to remove duplicates of Arrays.

const staff = ['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter'];
const uniqueStaff = [...new Set(staff)]; //convert ir into array with spread operator + []
console.log(uniqueStaff);

/////////////////////////////////////////////////////

//If I want to know how many unique values are I could use size

console.log(
  new Set(['waiter', 'chef', 'waiter', 'manager', 'chef', 'waiter']).size
);

//////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////

/*
//CHALLENGE #2

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
for (const [i, player] of game.scored.entries()) {
  console.log(`Goal ${i + 1}: ${player}`);
}

//2
const odds = Object.values(game.odds);

let average = 0;
for (const odd of odds) average += odd;
average /= odds.length;
console.log(average);

//3

for (const [team, odds] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odds}`);
}

//4
const scorers = {
  [game.scored[1]]: 1,
  [game.scored[3]]: 1,
  [game.scored[0]]: 2,
};

console.log(scorers);

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/*
const weekdays = ['mon', 'tue', 'wed', 'thu'];
const openingHours = {
  [weekdays[3]]: {
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
};

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  //Enhanced objects literal ES6
  //can add objects from outside, can compute property names, and no need to write function in the methods.
  openingHours,

  //Creater a method that return an array with the value at position given (index).
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring Object inside the argument of a function. Using {}
  //Funtion that recieves a delivery order
  // Why? It make it really use for the user to use the specific names of the arguments on the return of the funtion as I do now with the console.log giving a message.
  //Can set default values on the argument using =
  orderDelivery({ starterIndex = 1, mainIndex, time = '20:00', address }) {
    console.log(
      `Order received!: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },

  //Function order pasta with ingredients from user prompt
  orderPasta(ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  //Using REST in a function method
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//LECTURE: Looping objects keys, values and entries

//Objects keys
//keys are the property names inside the object

const properties = Object.keys(openingHours);

let openSrt = `We are open on ${properties.length} days: `;
for (const day of properties) {
  openSrt += `${day}, `;
}
console.log(openSrt);

///////////////////////////////////////////////////

//Property Values
const values = Object.values(openingHours);
console.log(values);

//Property entries (its key + value)
const entries = Object.entries(openingHours);
console.log(entries);

//[key,values]
//destructuring values to create string


for (const [day, { open, close }] of entries) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/*
//LECTURE: Optional Chaining
//check if a property exist before continue code. This avoid error and return undefined instead

console.log(restaurant.openingHours?.mon?.open); //undefined

//Example using nullish (??) and optional chainig (?)

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`on ${day} is open at ${open}`);
}

/////////////////////////////////////////////////////

//in Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderMenu?.(0, 1) ?? 'Method does not exist');

//////////////////////////////////////////////////

//in Arrays
const users = [{ name: 'Jonas', email: 'jonas@mail.io' }];
console.log(users[0]?.name ?? 'Array is empty');

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
/*
//LECTURE: FOR OF LOOP
//looping an array. Give the current elements of the array

const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu);

for (const item of menu) console.log(item);

//to show index(position of element) of array
for (const item of menu.entries()) {
  console.log(item);
}

//and since item is an array, we can destructure it
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`);
}

///////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////
/*
//CHALLENGE #1
const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//1
const [players1, players2] = game.players;
console.log(players1, players2);

//2
const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

//3
const allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4
const player1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(player1Final);

//5
const { team1, x: draw, team2 } = game.odds;
console.log(team1, draw, team2);

//6
const printGoals = function (...players) {
  console.log(...players, players.length);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

//7
team1 > team2 && console.log(`Team 1 likely to win`);
team1 < team2 && console.log(`Team 2 likely to win`);

/////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////
/*
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

  //Creater a method that return an array with the value at position given (index).
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Destructuring Object inside the argument of a function. Using {}
  //Funtion that recieves a delivery order
  // Why? It make it really use for the user to use the specific names of the arguments on the return of the funtion as I do now with the console.log giving a message.
  //Can set default values on the argument using =
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex,
    time = '20:00',
    address,
  }) {
    console.log(
      `Order received!: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be deliver to ${address} at ${time}`
    );
  },

  //Function order pasta with ingredients from user prompt
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  //Using REST in a function method
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//LECTUR: NULLISH COALESCING OPERATOR
//works with the idea of nullish values instead of falsy values
//not consider null or undefined. but include 0 or ''
restaurant.guestNum = 0;
const guest1 = restaurant.guestNum || 23; //23
const guest = restaurant.guestNum ?? 10; // 0 . consider falsy values.
console.log(guest);


/////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////
/*

//LECURE: SHORT-CIRCUITING || &&
//use any data type, return any data type and can do short circuiting

// || (or operator)
//if the first value is a trusty value inmediatly will return the first one. Won't even look the second value.
console.log(3 || 'Leo'); //3
console.log('' || 'Leo'); // Leo
console.log(undefined || null); //null
console.log(undefined || 0 || '' || 'hello' || 23); //hello

//Another example. Checking guest of the restaurant
// restaurant.guestNumber = 10;

// using ternary
const guest = restaurant.guestNumber ? restaurant.guestNumber : 23;

//using short circuiting, better.
const guest1 = restaurant.guestNumber || 23;
console.log(guest1);

/////////////////////////////////////////////////////////////////////

//AND OPERATOR &&
//the && operator short circuit with the first falsy value
console.log(0 && 'Jonas'); // 0
console.log(7 && 'Jonas'); // Jonas . Since borth are true, will show last value of the evaluation.

//Another practical example

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'tomato', 'spinach');
}

restaurant.orderpizza && restaurant.orderPizza('mushroom', 'tomato', 'spinach');

////////////////////////////////////////////////////////////////////



///////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
/*

//LECTURE: REST PATERNS AND PARAMETERS
//It collects remaining multiple elements and condenced in one array.

//REST because it's on the left of =
const [a, b, ...others] = [1, 2, [3, 4, 5]];
console.log(a, b, others);

//Another example
//using Rest and spread operator

const [pizza, , rissotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, rissotto, otherFood);

///////////////////////////////////////////////////////////

//REST ALSO WORK IN OBJECTS

const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays); // will take thu and fri, because already extract sat in its own variable.

////////////////////////////////////////////////////////////

//USING REST IN FUNCTION
//using rest operator as an argument to collect many given values and pack it into one array

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

//given values
add(1, 2);
add(4, 5, 6, 7, 8);
add(7, 3, 2, 5, 6, 7, 8, 2, 1);

//given value spreading a variable
const x = [2, 3, 4, 1];
add(...x);

//////////////////////////////////////////////////////

//Ordering Pizza for a function method

restaurant.orderPizza('mushroom', 'olives', 'tomato', 'spinach');

//////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////

/*

//Calling function with an Object containing the data of the delivery order. Using {}.
//And since its an object, I can destructure directly on the argument.
restaurant.orderDelivery({
  time: '23:30',
  address: 'Via del sone 351',
  mainIndex: 2,
  starterIndex: 0,
});

//Calling the order function without specify some values so the function will use the default ones.
restaurant.orderDelivery({
  address: 'Via del sone 351',
  mainIndex: 3,
});

//LECURE: DESTRUCTURING OBJECTS.{}

//Variable names has to mach the exactly name of property object to destructure.
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

//////////////////////////////////////////////////////////////

//CHANGE NAME VARIABLES

//Using : can change name of the variable. It's useful when dealing with third party data.
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

////////////////////////////////////////////////////////////////

//ADD DEFAULT VALUES

//Add default values using =. Useful when getting data that I don't know the value.
//in this case the default value is an empty array
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

///////////////////////////////////////////////////////////////

//MUTATING VARIABLES IN OBJECTS

let a = 99;
let b = 88;
const obj = { a: 23, b: 7, c: 12 };
console.log(a, b); //99 88

//to mutate use ()
({ a, b } = obj);
console.log(a, b); //23 7

///////////////////////////////////////////////////////////////////

//DESTRUCTURE NESTED OBJECTS
// using : and the exact property names of the object inside {}

const {
  fri: { open, close },
} = openingHours;
console.log(open, close); //11 23

///////////////////////////////////////////////////////////////

/*  
//LECTURE: DESTRUCTURING ARRAYS.  []

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

//////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////

/*

//LECTURE: THE SPREAD OPERATOR ... IN ARRAY
//To basicly expand an array in all it's elements

//new array without using spread operator. Have to write each position manually.
const arr = [3, 4, 5];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //[1, 2, 3, 4, 5]

//using spread operator ... It unpack the array for me.
const newArr = [1, 2, ...arr];
console.log(newArr); //[1, 2, 3, 4, 5]

/////////////////////////////////////////////////////////

//The other useful of the spread operator is when need to pass arguments into functions
//Using the spread operator it shows each element individually rather that in a array pack.
console.log(...newArr); //1 2 3 4 5
console.log(1, 2, 3, 4, 5);

console.log(newArr); // [1, 2, 3, 4, 5]

//EXAMPLE of need individual element rather than array pack.
//Create a new menu for the resturant.
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //creates ONE array with all elements indivually

const badMenu = [restaurant.mainMenu, 'Gnocci'];
console.log(badMenu); //creates ONE array with onother array and one elements

////////////////////////////////////////////////////////////

//Other useful of spread operator is to CREATE EXACTLY COPY OF AN ARRAY

const menuCopy = [...restaurant.mainMenu];

////////////////////////////////////////////////////////////

//or JOIN TWO ARRAYS

const fullMenu = [...restaurant.mainMenu, ...restaurant.starterMenu];

////////////////////////////////////////////////////////////

//ITERABLES. the Spread operator works in all iterables not only arrays.
//arrays, strings, maps, sets. NOT objects.

//SPREAD OPERATOR IN STRING.
//spread each letter of the word as individual element.

const str = 'Leo';
const letters = [...str, '', '.M'];
console.log(letters); //[L, e, o, ,.M]

//////////////////////////////////////////////////////////////

//FUNCTION USING SPREAD OPERATOR AS ARGUMENT

//get ingredients from promp windows
// const ingredients = [
//   prompt(`Let's make pasta!: Ingredient 1`),
//   prompt(`Ingredient 2?`),
//   prompt(`Ingredient 3?`),
// ];

//Call the function

//Old way.
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);

//Using spread operator
// restaurant.orderPasta(...ingredients);

//////////////////////////////////////////////////////////////////

//CREATE A NEW OBJECT FROM AN OBJECT USING SPREAD OPERATOR

const newRestaurant = { foundedIn: 1994, ...restaurant, owner: 'Giuseppe' };
console.log(newRestaurant);

////////////////////////////////////////////////////////////////

//CLONING AN OBJECT AND CHANGING VALUE
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristoranti Roma';

//////////////////////////////////////////////////////////////

*/
