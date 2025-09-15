const btnUp = document.getElementById('upBtn');
const slider = document.querySelector('.slider-hit')
const slides = slider.querySelectorAll('.slider-hit__page')
const activeSlides = 'slider-hit__page_status_active'
const slideCount = slides.length
const controlButtons = slider.querySelectorAll('.slider-hit__counter')
const prevButton = slider.querySelector('#slider-hit__button_L')
const nextButton = slider.querySelector('#slider-hit__button_R')
const activeButton = 'slider-hit__counter_active'
const inactiveButton = 'aria-disabled'
const currentButton = 'aria-current'
let currentSlide = 0

function updateSlider() {
  slides.forEach((slide, index) => {
    if(index === currentSlide) {
      slide.classList.add(activeSlides)
    } else {
      slide.classList.remove(activeSlides)
    }
  })
  controlButtons.forEach((button, index) => {
    if (index === currentSlide) {
      button.classList.add(activeButton)
      button.setAttribute(currentButton, true)
    } else {
      button.classList.remove(activeButton)
      button.removeAttribute(currentButton, true)
    }

    prevButton.setAttribute(inactiveButton, currentSlide === 0)
    nextButton.setAttribute(inactiveButton, currentSlide === slideCount - 1)
  })
}

controlButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    if (index < slideCount) {
      currentSlide = index
      updateSlider()
    }
  })
})

prevButton.addEventListener('click', () => {
  if (currentSlide > 0) {
    currentSlide--
    updateSlider()
  }
})

nextButton.addEventListener('click', () => {
  if (currentSlide < slideCount - 1) {
    currentSlide++
    updateSlider()
  }
})

slider.addEventListener('keydown', function (event) {
  if (event.key === 'ArrowLeft' && currentSlide > 0) {
    currentSlide--
    updateSlider()
  } else if (
    event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
    currentSlide++
    updateSlider()
  }
})

window.addEventListener('scroll', () => {
  btnUp.classList.toggle('BtnToUp_show', window.scrollY > 600);
});