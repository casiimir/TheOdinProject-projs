// Active the button of the selected element
// THIS CODE NEEDS REFACTORING!
function activeTheButton (button){
  const buttonElementClass = document.querySelector(`.${button}`);
  buttonElementClass.style.backgroundColor = 'orange';
}

function deactivateTheButton (button){
  const buttonElementClass = document.querySelector(`.${button}`);
  buttonElementClass.style.backgroundColor = 'transparent';
}

function pencil () {
  // Palette set color
  function setColorsFromPalette () {
    const paletteBtn = document.querySelector('label');
    const palette = document.querySelectorAll('.color-item');
    palette.forEach(element => {
      element.addEventListener('click', () => {
        paletteBtn.style.backgroundColor = element.getAttribute('color')
        color = element.getAttribute('color')
      })
    })
  }
  setColorsFromPalette();

  const pickColor = document.querySelector('label');
  let color = pickColor.style.backgroundColor;
  // Fix for the first color selection, becouse label is not the input
  // and doesn't have the value
  if(pickColor.style.backgroundColor === '') color = 'white'


  pickColor.addEventListener('input', (e) => {
    color = e.target.value;
    pickColor.style.backgroundColor = color
  });

  // Active the button
  // THIS NEEDS REFACTORING!
  deactivateTheButton('btn-rubber');
  activeTheButton('btn-pencil');

  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.addEventListener('click', () => {
      div.style.backgroundColor = color;
    })
  });
  // // Set drawing as dragging
  // let isActive = false;
  // const divs = document.querySelectorAll('.square');
  // divs.forEach(div => {
  //   div.addEventListener('mousedown', () => {
  //     isActive = true;
  //   })   
  //   div.addEventListener('mouseup', () => {
  //     isActive = false;
  //   })
  //   div.addEventListener('mouseover', () => {
  //     if (isActive) div.style.backgroundColor = color;
  //   })   
  // })
  // isActive = false;

}

function rubber () {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.addEventListener('click', () => {
      div.style.backgroundColor = 'transparent';
    });
  })

  // Active the button
  // THIS NEEDS REFACT.
  deactivateTheButton('btn-pencil');
  activeTheButton('btn-rubber');
}

function clear() {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.style.backgroundColor = 'transparent';
  })
}

function showGrid() {  
  const divs = document.querySelectorAll('.square'); 
  divs.forEach(div => {
    div.classList.toggle('square-grid');
  })
}

function fill () {  
  const pickColor = document.querySelector('label');
  let color = pickColor.style.backgroundColor;
  pickColor.addEventListener('change', (e) => color = e.target.value);

  const divs = document.querySelectorAll('.square'); 
  divs.forEach(div => {
    div.style.backgroundColor = color;
  })
}

// Maybe useless
function setColor () {  
  const pickColor = document.querySelector('.color'); 
  pickColor.addEventListener('change', (e) => color = e.target.value); 
  let color = pickColor.value;
  pickColor.style.backgroundColor = color;
}

// Function for the screenshoot
function takeScreenshoot () {
  let body = document.querySelector('body');
  let div = document.querySelector('.main-container'); 
  var data;
  html2canvas(div)
  .then(canvas => {
    let link = document.createElement('a');
    link.download = 'download.png';
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });

}

export { pencil, rubber, clear, showGrid, fill, setColor, takeScreenshoot };