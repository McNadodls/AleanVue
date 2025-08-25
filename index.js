const hitBtnL = document.querySelector("#slider-hit__button_L");
const hitBtnR = document.querySelector("#slider-hit__button_R");
const hitCount1 = document.querySelector('#slider-hit__counter_1');
const hitCount2 = document.querySelector('#slider-hit__counter_2');
const btn = document.getElementById('upBtn');


// function HandleSwapHit (e) {
//     const slides = document.querySelectorAll(".slider-hit__page");
//     const slideActiv = document.querySelector(".slider-hit__page_status_active")
//     if (e.target.id == "slider-hit__button_L")
//         {
//             if (slideActiv.previousElementSibling.type == "button") {
//                 slideActiv.classList = "slider-hit__page";
//                 slides[slides.length -1].classList = "slider-hit__page slider-hit__page_status_active";  
//                 return; 
//             }
//             slideActiv.classList = "slider-hit__page";
//             slideActiv.previousElementSibling.classList = "slider-hit__page slider-hit__page_status_active";
//             return
//         }
//     if (e.target.id == "slider-hit__button_R")
//         {
//             if (slideActiv.nextElementSibling.type == "button") {
//                 slideActiv.classList = "slider-hit__page";
//                 slides[0].classList = "slider-hit__page slider-hit__page_status_active";  
//                 return; 
//             }
//             slideActiv.classList = "slider-hit__page";
//             slideActiv.nextElementSibling.classList = "slider-hit__page slider-hit__page_status_active";
//             return
//         }
// };
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
    } else if (event.key === 'ArrowRight' && currentSlide < slideCount - 1) {
      currentSlide++
      updateSlider()
    }
  })

window.addEventListener('scroll', () => {
  btn.classList.toggle('BtnToUp_show', window.scrollY > 600);
});
hitBtnL.addEventListener("click", HandleSwapHit);
hitBtnR.addEventListener("click", HandleSwapHit);