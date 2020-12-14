function sel () {
  const paletteBtn = document.querySelector('.color');
  
  const palette = document.querySelectorAll('.color-item');
  palette.forEach(element => {
    element.addEventListener('click', () => {
      paletteBtn.style.backgroundColor = element.getAttribute('color')
    })
  })

  
}

export { sel };