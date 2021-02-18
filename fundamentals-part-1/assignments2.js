'use strict';

//JavaScript Fundamentals part 1

//LECTURE: Values and Variables
const country = 'Argentina';
const continent = 'South America';
let population = 40;
console.log(country, continent, population);

//LECTURE: Data Types
const isIsland = false;
let language;
console.log(
  typeof isIsland,
  typeof population,
  typeof country,
  typeof language
);

//LECTURE: let, const and var
language = 'Spanish';

//LECTURE: Basic Operators
//1
console.log(population / 2);
//2
population++;
console.log(population);
//3
let findlandPopulation = 6;
console.log(population > findlandPopulation);
//4
let avgPopulation = 33;
console.log(population > avgPopulation);

//LECTURE: Strings and Template Literals
const description = `${country} is in ${continent}, and it's ${population} million people speak ${language}`;
console.log(description);

// LECTURE: Taking Decisions: if / else Statements
//1, 2
if (population >= 33) {
  console.log(`${country}'s population is above average`);
} else {
  console.log(
    `${country}'s population is ${population - 33} million below average`
  );
}

// //LECTURE: Type Conversion and Coercion
// '9' - '5'; //3
// '19' - '13' + '17'; //617
// '19' - '13' + 17; //23
// '123' < 57; // false
// 5 + 6 + '4' + 9 - 4 - 2; // 1143

// // LECTURE: Equality Operators: == vs. ===
// //1
// const numNeighbours = Number();
// // prompt('How many neighbour countries does your country have?')
// //2,3,4,5
// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
//   1;
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }
// //6 Because prompt input is string
// //7
// //8 when propmt be aware that is string

// LECTURE: Logical Operators
if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// LECTURE: The switch Statement
switch (language) {
  case 'chinese':
  case 'mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'Spanish':
    console.log('2nd place in number of native speakers');
    break;
  case 'english':
    console.log('3rd place');
    break;
  case 'hindi':
    console.log('Number 4');
    break;
  case 'arabic':
    console.log('5th most spoken language');
    break;
  default:
    console.log('Great language too :D');
}

//LECTURE: The Conditional (Ternary) Operator
population > 33
  ? console.log(`${country}'s population is above average`)
  : console.log(`${country}'s population is below average`);

console.log(
  `${country}'s population is ${population > 33 ? `above` : `below`} average`
);

//CHALLENGE #1
