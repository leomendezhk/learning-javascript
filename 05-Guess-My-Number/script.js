'use strict';
/* 
// LECTURE: Selecting and manipulating elements 

console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🎉';

document.querySelector('.number').textContent = 19;
document.querySelector('.score').textContent = 10;

// Select value element use 'value'
document.querySelector('.guess').value = 12;
*/

//LECTURE:Handling click events, Game Logic.
//1 select element
//2 add event listener method
//3 add which event listen for and reaction to event(function)

//Define correct secret numer
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //Escenarios
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!🤭';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!🤭';
      document.querySelector('.score').textContent = 0;
    }
  }
});
