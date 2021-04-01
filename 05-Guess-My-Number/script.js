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
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//Refactoring repeated message with a function
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  //When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number!';
    displayMessage('⛔ No number!');
  }

  //When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secretNumber ? 'Too high!' : 'Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You Lost!🤭';
      displayMessage('Your lost!🤭');
      document.querySelector('.score').textContent = 0;
    }

    //When player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = 'Correct Number! 🎉';
    displayMessage('Correct Number! 🎉');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    //Highscore track
    if (score > highscore) {
      highscore = score;

      document.querySelector('.highscore').textContent = highscore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').textContent = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
