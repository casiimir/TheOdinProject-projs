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

function takeScreenshoot () {
  let body = document.querySelector('body');
  let div = document.querySelector('.main-container'); 

  html2canvas(div)
  .then(canvas => body.appendChild(canvas));
}

export { pencil, rubber, clear, showGrid, fill, setColor, takeScreenshoot };