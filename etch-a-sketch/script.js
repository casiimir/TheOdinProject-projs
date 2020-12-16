import { pencil, rubber, clear, showGrid, fill, setColor, takeScreenshoot } from "./tools.js";

function setCanvas (squaresDim) {
  console.log(squaresDim, dimGrid)
  console.log((dimGrid**2) / (squaresDim*squaresDim))
  for (let x = 1; x <= (dimGrid**2) / (squaresDim*squaresDim); x++) {
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

let dimGrid = 256;
let squaresDim = 32;
// Get all elements from the DOM
const mainContainer = document.querySelector('.canvas');

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
const buttonColor = document.querySelector('.btn-color');
buttonColor.addEventListener('change', () => setColor());

// Take screenshoot
const buttonTakeScreen = document.querySelector('.btn-take-screen');
buttonTakeScreen.addEventListener('click', () => takeScreenshoot());

// Choiche a grid from the right panel and init the sketchpad
const buttonSelectGrid = document.querySelectorAll('.btn-select-grid');
buttonSelectGrid.forEach(button => {
  button.addEventListener('click', (e) => {
    const eventButtonName = e.target.name;
    const confirmClean = confirm("Are you sure? You'll lose your drawing...");
    if (confirmClean) { 
      squaresDim = dimGrid/eventButtonName;
      init();
    }
  })
});


init();

