import { pencil, rubber, clear, showGrid, fill, setColor } from "./tools.js";

function setCanvas (squaresDim) {
  for (let x = 1; x <= (256*256) / (squaresDim*squaresDim); x++) {
    const div = document.createElement('div');
    div.classList.add('square');
    mainContainer.appendChild(div);
  }
}

function setGridSquares (squaresDim) {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.style.width = `${squaresDim}px`;
    div.style.height = `${squaresDim}px`;
  })
}

function init () {
  setCanvas(squaresDim);
  setGridSquares(squaresDim);
}

// Get all elements from the DOM
const mainContainer = document.querySelector('.main-container');
let squaresDim = 32;

const buttonClear = document.querySelector('.btn-clear');
buttonClear.addEventListener('click', () => clear());

const buttonPencil = document.querySelector('.btn-pencil');
buttonPencil.addEventListener('click', () => pencil());

const buttonRubber = document.querySelector('.btn-rubber');
buttonRubber.addEventListener('click', () => rubber());

const buttonGrid = document.querySelector('.btn-grid');
buttonGrid.addEventListener('click', () => showGrid());

const buttonFill = document.querySelector('.btn-fill');
buttonFill.addEventListener('click', () => fill());

const buttonColor = document.querySelector('.color');
buttonColor.addEventListener('change', () => setColor());

init();
