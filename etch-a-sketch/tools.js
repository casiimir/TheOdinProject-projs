// changeColorOnClickForEachSingle gets an element and set the properly color var
// foreach element (it accepts querySelectorAll) and add eventListener 
function changeColorOnClickForEachSingle(element, color, needEventListener) {
  const elements = document.querySelectorAll(element);
  if (needEventListener) {
    elements.forEach(el => {
      el.addEventListener('click', () => {
        el.style.backgroundColor = color;
      })
    });
  } else {
    elements.forEach(el => el.style.backgroundColor = color);
  }
}
// Active the button of the selected element
// Refactoring this
function activeTheButton (button){
  const buttonElementClass = document.querySelector(`.${button}`);
  buttonElementClass.style.backgroundColor = '#ff9a76';
}
function deactivateTheButton (button){
  const buttonElementClass = document.querySelector(`.${button}`);
  buttonElementClass.style.backgroundColor = 'transparent';
}

// Desktop drag-and-draw
function clickAndDrag (color) {
  if (!isMobile) {
    let isActive = false;
    const divs = document.querySelectorAll('.square');
    divs.forEach(div => {
      div.addEventListener('mousedown', () => {
        isActive = true;
        div.style.backgroundColor = color;
      })   
      div.addEventListener('mouseup', () => {
        isActive = false;
      })
      div.addEventListener('mouseover', () => {
        if (isActive) div.style.backgroundColor = color;
      })   
    })
    isActive = false;
  }
}

function pencilTool () {
  // Palette set color
  function setColorsFromPalette () {
    paletteEls.forEach(element => {
      element.addEventListener('click', () => {
        paletteBtnEl.style.backgroundColor = element.getAttribute('color');
        color = element.getAttribute('color')
        changeColorOnClickForEachSingle('.square', color, true);
        // Refactoring this
        deactivateTheButton('btn-rubber');
        activeTheButton('btn-pencil');
        
        // Drag-and-draw
        clickAndDrag(color);
      })
    })
  }
  
  setColorsFromPalette();
  let color = paletteBtnEl.style.backgroundColor;
  // Fix for the first color selection, becouse label is not the input
  // and doesn't have the value
  if(!color) color = 'white';
  changeColorOnClickForEachSingle('.square', color, true);
  paletteBtnEl.addEventListener('input', (e) => {
    color = e.target.value;
    paletteBtnEl.style.backgroundColor = color;
    changeColorOnClickForEachSingle('.square', color, true);
    // Refactoring this
    deactivateTheButton('btn-rubber');
    activeTheButton('btn-pencil');

    // Drag-and-draw
    clickAndDrag(color);
  });
  // Refactoring this
  deactivateTheButton('btn-rubber');
  activeTheButton('btn-pencil');
  
  // Drag-and-draw
  clickAndDrag(color);
}

function rubberTool () {
  clickAndDrag('transparent');
  changeColorOnClickForEachSingle('.square', 'transparent', true);
  deactivateTheButton('btn-pencil');
  activeTheButton('btn-rubber');
}

function clearTool() {
  changeColorOnClickForEachSingle('.square', 'transparent', false);
}

function showGridTool() {  
  const divs = document.querySelectorAll('.square'); 
  divs.forEach(div => {
    div.classList.toggle('square-grid');
  })
}

function fillTool () {  
  let color = paletteBtnEl.style.backgroundColor;
  if(!color) color = 'white';
  paletteBtnEl.addEventListener('change', (e) => color = e.target.value);
  changeColorOnClickForEachSingle('.square', color, false);
}

function screenshootTool () {
  const fileName = prompt("File name: ");
  html2canvas(canvasEl)
  .then(canvas => {
    let link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = canvas.toDataURL();
    link.click();
    link.delete;
  });
}

const paletteEls = document.querySelectorAll('.palette-item');
const paletteBtnEl = document.querySelector('.color-label');
const canvasEl = document.querySelector('.canvas');
const isMobile = /Iphone|iPad|iPod|Android|BlackBerry|IEMobile/i.test(window.navigator.userAgent);

export { pencilTool, rubberTool, clearTool, showGridTool, fillTool, screenshootTool };




// if (isMobile) {
//   // Set drawing holding on click (only Desktop - check 'isMobile')
//   let isActive = false;
//   const divs = document.querySelectorAll('.square');
//   divs.forEach(div => {
//     div.addEventListener('mousedown', () => {
//       isActive = true;
//       div.style.backgroundColor = color;
//     })   
//     div.addEventListener('mouseup', () => {
//       isActive = false;
//     })
//     div.addEventListener('mouseover', () => {
//       if (isActive) div.style.backgroundColor = color;
//     })   
//   })
//   isActive = false;
// }