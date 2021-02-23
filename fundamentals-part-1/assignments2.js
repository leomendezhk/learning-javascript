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
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
//1
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

//2
const bmiMark = massMark / heightMark ** 2;
const bmiJohn = massJohn / heightJohn ** 2;

//3
const markHigherBMI = bmiMark > bmiJohn;
console.log(markHigherBMI);

//CHALLENGE #2
//1, 2
if (bmiMark > bmiJohn) {
  console.log(`Mark BMI ${bmiMark} is higher than John BMI ${bmiJohn}`);
} else {
  console.log(`John BMI is higher than Mark's`);
}

//CHALLENGE #3
/*
Test data:
§ Data 1: 
Dolphins score 96, 108 and 89.
Koalas score 88, 91 and 110
§ Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
§ Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//1
const avgDolphins = (97 + 112 + 101) / 3;
const avgKoalas = (109 + 95 + 106) / 3;
console.log(avgDolphins, avgKoalas);
//2,3,4
if (avgDolphins > avgKoalas && avgDolphins >= 100) {
  console.log(`Dolphins wins!`);
} else if (avgKoalas > avgDolphins && avgKoalas >= 100) {
  console.log(`Koalas wins!`);
} else if (
  avgDolphins === avgKoalas &&
  avgDolphins >= 100 &&
  avgKoalas >= 100
) {
  console.log(`It's a draw!`);
}
