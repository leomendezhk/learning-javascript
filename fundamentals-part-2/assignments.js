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










 






