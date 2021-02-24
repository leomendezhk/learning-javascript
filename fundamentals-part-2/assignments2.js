'use stric';

//LECTURE: Functions
//1
const describeCountry = function (country, population, capitalCity) {
  return `${country} has a ${population} million population and its capital is ${capitalCity}`;
};

const descArgentina = describeCountry('Argentina', 40, 'Buenos Aires');
const descPeru = describeCountry('Peru', 7, 'Lima');

console.log(descArgentina, descPeru);

/////////////////////////////////////////////////////////////////////

//LECTURE: Function Declarations vs. Expressions
//1,2
const percentageOfWorld1 = function (population) {
  return (population / 7900) * 100;
};

const percArgentina = percentageOfWorld1(40);
const percPeru = percentageOfWorld1(7);
const percChile = percentageOfWorld1(12);

//3
console.log(percArgentina, percPeru, percChile);

//4
function percentageOfWorld2(population) {
  return (population / 7900) * 100;
}

const percArgentina2 = percentageOfWorld2(40);
const percPeru2 = percentageOfWorld2(7);
const percChile2 = percentageOfWorld2(12);

console.log(percArgentina2, percPeru2, percChile2);

//////////////////////////////////////////////////////////////////////

//LECTURE: Arrow Functions
//1
const percentageOfWorld3 = population => {
  return (population / 7900) * 100;
};

const percArgentina3 = percentageOfWorld3(40);
console.log(percArgentina3);

//////////////////////////////////////////////////////////////////////

//LECTURE: Functions Calling Other Functions
//1,2
const describePopulation = function (country, population) {
  const percentage = percentageOfWorld1(population);

  return `${country} has ${population} million people, which is about ${percentage}% of the world`;
};
//3
const descArg = describePopulation('Argentina', 40);
const descPer = describePopulation('Peru', 7);
const descUsa = describePopulation('USA', 32);
console.log(descArg);

//////////////////////////////////////////////////////////////////////

//LECTURE: Introduction to Arrays
//1
const populations = [1441, 30, 7, 1];
//2
console.log(populations.length === 4);
//3
const percentages = [
  percentageOfWorld1(populations[0]),
  percentageOfWorld1(populations[1]),
  percentageOfWorld1(populations[2]),
  percentageOfWorld1(populations[3]),
];
console.log(percentages);

////////////////////////////////////////////////////////////////////

//LECTURE: Basic Array Operations (Methods)
//1
const neighbours = ['Chile', 'Uruguay', 'Bolivia'];
//2
neighbours.push('Utopia');
//3
neighbours.pop();
console.log(neighbours);
//4
if (!neighbours.includes('Germany')) {
  console.log('Probably not a central European country :D');
}
//5
console.log(neighbours.indexOf('Chile'));
neighbours[0] = 'Chilenos';
console.log(neighbours);

////////////////////////////////////////////////////////////////////

//LECTURE: Introduction to Objects
//1
const myCountry = {
  country: 'Argentina',
  capital: 'Buenos Aires',
  language: 'Spanish',
  population: 40,
  neighbours: ['Chile', 'Uruguay', 'Bolivia'],
};

////////////////////////////////////////////////////////////////////

//LECTURE: Dot vs. Bracket Notation
//1
console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language}-speaking people, ${myCountry.neighbours.length} neighbouring countries
and a capital called ${myCountry.capital}.`);

//2
myCountry.population += 2;
myCountry['population'] -= 2;
console.log(myCountry.population);

/////////////////////////////////////////////////////////////////////

//LECTURE: Object Methods
//1
const myCountry1 = {
  country: 'Argentina',
  capital: 'Buenos Aires',
  language: 'Spanish',
  population: 40,
  neighbours: ['Chile', 'Uruguay', 'Bolivia'],

  describe: function () {
    return `${this.country} has ${this.population} million ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries
    and a capital called ${this.capital}.`;
  },

  checkIsland: function () {
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
  },
};

//2
myCountry1.describe();
myCountry1.checkIsland();

///////////////////////////////////////////////////////////////////

// LECTURE: Iteration: The for Loop

for (let i = 0; i <= 50; i++) {
  console.log(`Voter number ${i} is currently voting`);
}

///////////////////////////////////////////////////////////////////

// LECTURE: Looping Arrays, Breaking and Continuing

//1
const populations1 = [1441, 30, 7, 1];
const percentages2 = [];

for (let i = 0; i < populations1.length; i++) {
  percentages2.push(percentageOfWorld1(populations1[i]));

  //   const perc = percentageOfWorld1(populations[i]);
  //  percentages2.push(perc);
}

console.log(percentages);
console.log(percentages2);

/////////////////////////////////////////////////////////////////////

//LECTURE: Looping Backwards and Loops in Loops

//1
const listOfNeighbours = [
  ['Canada', 'Mexico'],
  ['Spain'],
  ['Norway', 'Sweden', 'Russia'],
];

//2
for (let i = 0; i < listOfNeighbours.length; i++) {
  for (let y = 0; y < listOfNeighbours[i].length; y++) {
    console.log(`Neighbour: ${listOfNeighbours[i][y]}`);
  }
}

//////////////////////////////////////////////////////////////////

// LECTURE: The while Loop

const percentages3 = [];
let i = 0;
while (i < populations1.length) {
  percentages3.push(percentageOfWorld1(populations1[i]));
  i++;
}

console.log(percentages3);

///////////////////////////////////////////////////////////////////
