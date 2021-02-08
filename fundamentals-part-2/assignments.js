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