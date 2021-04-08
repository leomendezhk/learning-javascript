'use strict';

//LECTURE: Project Modal window
//First select clases that will be used and store into variables

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal'); //select multiple All

// //Run a for-loop to work with all elements with same class
// for (let i = 0; i < btnsOpenModal.length; i++)
//   console.log(btnsOpenModal[i].textContent);

/////////////////////////////////////////////////////////////////////////////////

//LECTURE: Working with clases
//Refactoring creating a variables (closeModal, openModal) and storing function in there. Then using it as argument in eventListener.

//Variables with stored function
const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

//Eventlistener, what will happen when click.
for (let i = 0; i < btnsOpenModal.length; i++) {
  btnsOpenModal[i].addEventListener('click', openModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

/////////////////////////////////////////////////////////////////////////////////

//LECTURE: How to handle keypress event
//keypress events are handle as global events

//global event check all object in the document
//(e) is to see the event details, with the event details i can take the key and use it as argument for a boolean

document.addEventListener('keydown', function (e) {
  // console.log(e.key);

  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

/////////////////////////////////////////////////////////////////////////////////
