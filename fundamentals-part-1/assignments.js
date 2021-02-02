/*
// LECTURE : Value and Variables
const country = 'Argentina';
const continent = 'South America';
let population = 40; 

console.log(country, continent, population);
*/ 

////////////////////////////////////////////////////////////////////////////

/* 
// LECTURE : Data types
let isIsland = false;
let language;

console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: let, cons, var
language = 'spanish';
//changed variable type of country and continent
*/

////////////////////////////////////////////////////////////////////////////

/*
//LECTURE: Operators
//1
console.log(population / 2);
//2
population++;
console.log(population);
//3
const populationFinland = 60;
console.log(population > populationFinland);
//4
const populationAverage = 33;
console.log(population < populationAverage);
//5
const countryName = 'Portugal';
const countryLocation = 'Europe';
const countryPopulation = 11;
const countryLanguage = 'portuguese';
const description = countryName + ' is in ' + countryLocation + ',' + ' and its ' + countryPopulation + ' million people who speak ' + countryLanguage;
console.log(description);
*/

////////////////////////////////////////////////////////////////////////////

/*
// CODING CHALLENGE #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
//Data 1
//1
// const markWeight = 78;
// const markHeight = 1.69;
// const johnWeight = 92;
// const johnHeight = 1.95;
const markWeight = 95;
const markHeight = 1.88;
const johnWeight = 85;
const johnHeight = 1.76;
//2
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;
console.log(markBMI);
console.log(johnBMI);
//3
const markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: String and Template literals
const descriptionNew = `${countryName} is in ${countryLocation}, and its ${countryPopulation} million people who speak ${countryLanguage}`;
*/

////////////////////////////////////////////////////////////////////////////

/*
//LECTURE: Taking Decisions: if / else Statements
if (countryPopulation > 33) {
  console.log(`${countryName}'s population is above average`);
} else {
  console.log(`${countryName}'s population is ${33 - countryPopulation} million below average`);
}
*/

////////////////////////////////////////////////////////////////////////////

/*
// CODING CHALLENGE #2
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

// 1
const markWeight = 78;
const markHeight = 1.69;
const johnWeight = 92;
const johnHeight = 1.95;
const markBMI = markWeight / markHeight ** 2;
const johnBMI = johnWeight / johnHeight ** 2;

if(markBMI > johnBMI) {
  console.log(`Mark's BMI is greater than John's`);
} else {
  console.log(`John's BMI is greater than Mark's`);
}

// 2
const resultBMI = `Mark's BMI (${markBMI}) is greather than John's (${johnBMI})`;
console.log(resultBMI);
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: Type conversion and type coercion
// 1
'9' - '5'; // 4
'19' - '13' + '17'; //617
'19' - '13' + 17; //23
'123' < 57; // false
5 + 6 + '4' + 9 - 4 - 2; //1143
//2
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' < 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);
*/

////////////////////////////////////////////////////////////////////////////

/*
//LECTURE: Equality operators === vs ==
//1
const numNeighbours = Number(
  prompt('How many neighbour countries does your country have?')
  );
//2,3,4,5,6,7
if (numNeighbours === 1) {
  console.log('Only 1 border!');
} else if (numNeighbours > 1) {
  console.log('More than 1 border');
} else { 
  console.log('No borders'); 
}

//8: if the value is a number, better to convert to Number the variable value input and use === to prevent bugs
*/

////////////////////////////////////////////////////////////////////////////

/*
//LECTURE: Logical operators
//2
const countryName = 'Portugal';
const speakEnglish = true;
const countryPopulation = 33;
const isIsland = false;
//3,4,5
if ( speakEnglish && countryPopulation < 50 && !isIsland) {
  console.log(`You should live in ${countryName} :)`);
} else {
  console.log(`${countryName} does not meet your criteria :(`);
}
*/

////////////////////////////////////////////////////////////////////////////

/*
// CODING CHALLENGE #3
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins the a trophy!

1. Calculate the average score for each team, using the test data below
2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score).

3. BONUS 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. HINT: Use a logical operator to test for minimum score, as well as multiple else-if blocks 
4. BONUS 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy.

TEST DATA: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
TEST DATA BONUS 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
TEST DATA BONUS 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// 1
const dolphins = (96 + 108 + 89) / 3;
const koalas = (88 + 91 + 110) / 3;
//2
if(dolphins > koalas) {
  console.log(`Dolphins Wins!`);
} else if (dolphins === koalas) {
  console.log(`It's a draw!`);
} else {
  console.log(`Koalas Wins!`);
}
console.log(dolphins, koalas);
// 3
const bonusDolphins = (97 + 112 + 101) / 3;
const bonusKoalas = (109 + 95 + 106) / 3;
console.log(bonusDolphins, bonusKoalas);

if (bonusDolphins > bonusKoalas && bonusDolphins >= 100) {
  console.log(`Dolphins wins bonus!`);
} else if (bonusDolphins < bonusKoalas && bonusKoalas >= 100) {
  console.log(`Koalas wins bonus!`);
} else if (bonusDolphins === bonusKoalas && bonusKoalas >= 100 && bonusDolphins >= 100) {
  console.log(`It's a draw bonus!`);
} 
// 4
else {
  console.log(`No winners!`);
}
*/

////////////////////////////////////////////////////////////////////////////

/*
//LECTURE: The switch statement
const language = 'english';

switch (language) {
  case 'chinese or mandarin':
    console.log('MOST number of native speakers!');
    break;
  case 'spanish':
    console.log('second number of native speakers!');
    break;
  case 'english':
    console.log('third number of native speakers!');
    break;
  case 'hindi':
    console.log('number 4');
    break;
  case 'arabic':
    console.log('number 5');
    break;
  default:
    console.log('Nice language too!');
}
*/

////////////////////////////////////////////////////////////////////////////

/*
// LECTURE: The Conditional (Ternary) Operator
//1,2
const populationArgentina = 40;

console.log(`Argentina population is ${populationArgentina > 33 ? 'above' : 'below'} average`);
*/

////////////////////////////////////////////////////////////////////////////

/*
//CHALLENGE #4
Steven wants to build a very simple tip calculator for whenever he goes eating in a resturant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.

1. Your task is to caluclate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement  (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: 'The bill was 275, the tip was 41.25, and the total value 316.25'

TEST DATA: Test for bill values 275, 40 and 430

//1
const bill = 430;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value is ${bill + tip}`);
*/