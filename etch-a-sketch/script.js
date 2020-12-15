import { pencil, rubber, clear, showGrid, fill, setColor, takeScreenshoot } from "./tools.js";

function setCanvas (squaresDim) {
  for (let x = 1; x <= (256*256) / (squaresDim*squaresDim); x++) {
    const div = document.createElement('div');
    div.classList.add('square');
    mainContainer.appendChild(div);
  }
}

function setSquares (squaresDim) {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.classList.add('square-grid');
    div.style.width = `${squaresDim}px`;
    div.style.height = `${squaresDim}px`;
  })
}

function init () {
  clear();
  setCanvas(squaresDim);
  setSquares(squaresDim);
  pencil();
}

let squaresDim = 32;
// Get all elements from the DOM
const mainContainer = document.querySelector('.main-container');

const buttonClear = document.querySelector('.btn-clear');
buttonClear.addEventListener('click', () => {
  const conf = confirm("Are you sure? You'll lose your drawing...");
  if (conf) clear();
});

const buttonPencil = document.querySelector('.btn-pencil');
buttonPencil.addEventListener('click', () => pencil());

const buttonRubber = document.querySelector('.btn-rubber');
buttonRubber.addEventListener('click', () => rubber());

const buttonGrid = document.querySelector('.btn-grid');
buttonGrid.addEventListener('click', () => showGrid());

const buttonFill = document.querySelector('.btn-fill');
buttonFill.addEventListener('click', () => fill());

// Maybe useless
const buttonColor = document.querySelector('.color');
buttonColor.addEventListener('change', () => setColor());

// Take screenshoot
const buttonTakeScreen = document.querySelector('.btn-take-screen');
buttonTakeScreen.addEventListener('click', () => takeScreenshoot());

// Choiche a grid from the right panel and init the sketchpad
const buttonSelectGrid = document.querySelectorAll('.btn-select-grid');
buttonSelectGrid.forEach(button => {
  button.addEventListener('click', (e) => {
    const conf = confirm("Are you sure? You'll lose your drawing...");
    if (conf) {
      switch (e.target.name - 0) {
        case 8:        
        squaresDim = 32;
        break;
        case 16:
          squaresDim = 16;        
          break;
        case 32:
          squaresDim = 8;     
          break;
        case 4:
          squaresDim = 64;     
          break;
      }
      init();
    }
  })
});


init();

