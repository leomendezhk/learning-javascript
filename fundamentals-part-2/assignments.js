'use strict';

/////////////////////////////////////////////////////////////////////
/*
// LECTURE: FUNCTIONS
//1
function describeCountry(country, population, capitalCity) {
  const countryData = `${country} has ${population} million people and its capital city is ${capitalCity}`;
  return countryData;
}
//2
const argentinaData = describeCountry('Argentina', 40, 'Buenos Aires');
console.log(argentinaData);
const portugalData = describeCountry('Portugal', 33, 'Lisbon');
console.log(portugalData);
const findlandData = describeCountry('Findland', 6, 'Helsinski');
console.log(findlandData);
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: Function Declarations vs. Expressions
//1,2
const worldPopulation = 7900;
function percentageOfWorld1(population) {
  return (population / worldPopulation) * 100;
}
//3
const chinaPopulation = percentageOfWorld1(1441);
const argentinaPopulation = percentageOfWorld1(40);
const portugalPopulation = percentageOfWorld1(33);
console.log(chinaPopulation, argentinaPopulation, portugalPopulation);

//4
const percentageOfWorld2 = function(population) {
  return (population / worldPopulation) * 100;
}
const chinaPopulation2 = percentageOfWorld2(1441);
console.log(chinaPopulation2);
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: Arrow Functions
//1
const percentageOfWorld3 = population => (population / 7900) * 100;

const chinaPopulation3 = percentageOfWorld3(1441);
console.log(chinaPopulation3); 
*/

/////////////////////////////////////////////////////////////////////
/*
//LECTURE: Functions Calling Other Functions
//2
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
//1
const describePopulation = function(country, population) {
  const percentage = percentageOfWorld1(population); //2
  const description =`${country} has ${population} million people, which is about ${percentage} of the world.`;
  console.log(description);
}

//3
describePopulation('China', 1441);
describePopulation('Argentina', 40);
describePopulation('Portugal', 33);
*/ 

/////////////////////////////////////////////////////////////////////

/*
//CODING CHALLENGE #1
//Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently. Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team). A team only wins if it has at least double the average score of the other team. Otherwise, no team wins.

// Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27

//1
const calcAverage = (a, b, c) => (a + b +c) / 3;
console.log(calcAverage(3, 4, 5));
//2
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
// 3
const checkWinner = function(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas wins (${koalas} vs ${avgDolphins})`);
  } else {
    console.log(`No team wins`);
  }
}

checkWinner(scoreDolphins, scoreKoalas);

// 4
//changed const to let, so i can change values
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);

console.log(scoreDolphins, scoreKoalas);
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: Arrays

//1
const population = [1441, 40, 30, 16];
//2
console.log(population.length === 4);
//3
function percentageOfWorld1(population) {
  return (population / 7900) * 100;
}
const percentages = [
  percentageOfWorld1(population[0]),
  percentageOfWorld1(population[1]),
  percentageOfWorld1(population[2]),
  percentageOfWorld1(population.length - 1)
];
console.log(percentages);
*/

/////////////////////////////////////////////////////////////////////

/*
//LECTURE: Array methods
//1
const neighbours = ['Uruguay', 'Chile', 'Bolivia'];
//2
neighbours.push('Utopia');
//3
neighbours.pop();
//4
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D')
}
//5
neighbours[neighbours.indexOf('Bolivia')] = 'Brasil';
console.log(neighbours);
*/

/////////////////////////////////////////////////////////////////////

/*
//CODING CHALLENGE #2
//Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20%


//1
const calcTip = function(bill) {
  // if (bill >= 50 & bill <= 300) {
  //   return (bill * 15) / 100;
  // } else {
  //   return (bill * 20) / 100;
  // }
  return bill >= 50 & bill <= 300 ? bill * 0.15 : bill * 0.2;
}

console.log(calcTip(100));

//2
const bills = [125, 555, 44];

// 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(tips);

//4
const total = [bills[0] + tips[0] + bills[1] + tips[1] + bills[2] + tips[2]];
console.log(total);

*/

/////////////////////////////////////////////////////////////////////

/*

// LECTURE: Introduction to OBJECTS

//1
const myCountry = {
  country: 'Argentina',
  capital: 'Buenos Aires',
  language: 'Spanish',
  population: 40,
  neighbours: ['Chile', 'Bolivia', 'Brasil']
}

*/

/////////////////////////////////////////////////////////////////////
/*

// LECTURE: Dot vs. Bracket Notation

const myCountry = {
  country: 'Argentina',
  capital: 'Buenos Aires',
  language: 'Spanish',
  population: 40,
  neighbours: ['Chile', 'Bolivia', 'Brasil']
}

//1
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

//2
myCountry.population += 2;
console.log(myCountry.population);

myCountry['population'] -= 2;
console.log(myCountry.population);

*/
/////////////////////////////////////////////////////////////////////
/*

//CHALLENGE #3

//1
const mark = {
  firstName: 'Mark',
  lastName: 'Miller',
  weight: 78,
  heigh: 1.69,

  //2
  calcBMI: function() {
    return this.BMI = this.weight / (this.heigh ** 2);
  }
}

const john = {
  firstName: 'John',
  lastName: 'Smith',
  weight: 92,
  heigh: 1.95,

  //2
  calcBMI: function() {
    return this.BMI = this.weight / (this.heigh ** 2);
  }
}

console.log(mark.calcBMI(), john.calcBMI());

//3
if (mark.BMI > john.BMI) {
  console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is higher than ${john.firstName} ${john.lastName}'s BMI (${john.BMI})`)} else {
    console.log(`${mark.firstName} ${mark.lastName}'s BMI (${mark.BMI}) is lower than ${john.firstName} ${john.lastName}'s BMI (${john.BMI})`)
  } 

*/
/////////////////////////////////////////////////////////////////////

//LECTURE: Iteration: The for Loop

//1

for (let vote = 1; vote <= 50; vote++) {
  console.log(`voter number ${vote} is currently voting`)
}



