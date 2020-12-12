function drawGrid (dim) {
  for (let x = 1; x <= (256*256) / (dim*dim); x++) {
    const div = document.createElement('div');
    div.classList.add('square');
    mainContainer.appendChild(div);
  }
}

function setGridSquares (dim) {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.style.width = `${dim}px`;
    div.style.height = `${dim}px`;
  })
}

function hoverOnSquares() {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.addEventListener('click', (e) => {
      div.style.backgroundColor = color;
    });
  })
}

function clearTheGrid() {
  clearButton.addEventListener('click', () => {    
    const divs = document.querySelectorAll('.square');
    divs.forEach(div => {
      div.style.backgroundColor = 'transparent';
    })
    gridDimension = prompt('How many squares per side?\nPut: 8, 16, 32, 64 or 128');
    if (gridDimension <= 128 && gridDimension >= 8) {
      drawNewGrid();
    } else {
      gridDimension = prompt('Min size: 8px, Max size 128px\nPut: 8, 16, 32, 64 or 128');
    }
  })
}

function drawNewGrid () {
  drawGrid(gridDimension);
  setGridSquares(gridDimension);
  hoverOnSquares();
}

function setColor () {
  pickColor.addEventListener('change', (e) => color = e.target.value);
}

// Get all elements from the DOM
const mainContainer = document.querySelector('.main-container');
const clearButton = document.querySelector('.btn');
const pickColor = document.querySelector('.color');
let color = 'violet';
let gridDimension = 32;

drawNewGrid();
clearTheGrid();
setColor();