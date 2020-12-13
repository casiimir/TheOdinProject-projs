function pencil () {
  const pickColor = document.querySelector('.color');
  let color = pickColor.value;
  pickColor.addEventListener('change', (e) => color = e.target.value);

  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.addEventListener('click', (e) => {
      div.style.backgroundColor = color;
    });
  })
}

function rubber () {
  const divs = document.querySelectorAll('.square');
  divs.forEach(div => {
    div.addEventListener('click', () => {
      div.style.backgroundColor = 'transparent';
    });
  })
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
  const pickColor = document.querySelector('.color');
  let color = pickColor.value;
  pickColor.addEventListener('change', (e) => color = e.target.value);

  const divs = document.querySelectorAll('.square'); 
  divs.forEach(div => {
    div.style.backgroundColor = color;
  })
}

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