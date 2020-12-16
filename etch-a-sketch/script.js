import { pencilTool, rubberTool, clearTool, showGridTool, fillTool, screenshootTool } from "./tools.js";

function setCanvas (dimSquare) {
  const numOfSquares = ((dimGrid/dimSquare)**2);
  for (let x = 1; x <= numOfSquares; x++) {
    const div = document.createElement('div');
    div.classList.add('square');
    mainContainer.appendChild(div);
  }
}

function setSquares (dimSquare) {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.classList.add('square-grid');
    div.style.width = `${dimSquare}px`;
    div.style.height = `${dimSquare}px`;
  })
}

function init () {
  clearTool();
  setCanvas(dimSquare);
  setSquares(dimSquare);
  pencilTool();
}

let dimGrid = 256;
let dimSquare = 32;
// Get all elements from the DOM
const mainContainer = document.querySelector('.canvas');

const buttonClear = document.querySelector('.btn-clear');
buttonClear.addEventListener('click', () => {
  const conf = confirm("Are you sure? You'll lose your drawing...");
  if (conf) clearTool();
});

const buttonPencil = document.querySelector('.btn-pencil');
buttonPencil.addEventListener('click', () => pencilTool());

const buttonRubber = document.querySelector('.btn-rubber');
buttonRubber.addEventListener('click', () => rubberTool());

const buttonGrid = document.querySelector('.btn-grid');
buttonGrid.addEventListener('click', () => showGridTool());

const buttonFill = document.querySelector('.btn-fill');
buttonFill.addEventListener('click', () => fillTool());

// Take screenshoot
const buttonTakeScreen = document.querySelector('.btn-take-screen');
buttonTakeScreen.addEventListener('click', () => screenshootTool());

// Choiche a grid from the right panel and init the sketchpad
const buttonSelectGrid = document.querySelectorAll('.btn-select-grid');
buttonSelectGrid.forEach(button => {
  button.addEventListener('click', (e) => {
    const eventButtonName = e.target.name;
    const confirmClean = confirm("Are you sure? You'll lose your drawing...");
    
    if (confirmClean) {
      
      // It needs remove present divs too (reset the number or squares):
      const divs = document.querySelectorAll('.square');
      divs.forEach(div => div.remove());

      dimSquare = dimGrid/eventButtonName;
      init();
    }
  })
  

});


init(); // Start the play! ;)