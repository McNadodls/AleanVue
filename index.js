const hitBtnL = document.querySelector("#slider-hit__button_L");
const hitBtnR = document.querySelector("#slider-hit__button_R");
const hitCount1 = document.querySelector('#slider-hit__counter_1');
const hitCount2 = document.querySelector('#slider-hit__counter_2');
// const slides = document.querySelectorAll(".slider-hit__page");


function HandleSwapHit (e) {
    const slides = document.querySelectorAll(".slider-hit__page");
    const slideActiv = document.querySelector(".slider-hit__page_status_active")
    if (e.target.id == "slider-hit__button_L")
        {
            if (slideActiv.previousElementSibling.type == "button") {
                slideActiv.classList = "slider-hit__page";
                slides[slides.length -1].classList = "slider-hit__page slider-hit__page_status_active";  
                return; 
            }
            slideActiv.classList = "slider-hit__page";
            slideActiv.previousElementSibling.classList = "slider-hit__page slider-hit__page_status_active";
            return
        }
    if (e.target.id == "slider-hit__button_R")
        {
            if (slideActiv.nextElementSibling.type == "button") {
                slideActiv.classList = "slider-hit__page";
                slides[0].classList = "slider-hit__page slider-hit__page_status_active";  
                return; 
            }
            slideActiv.classList = "slider-hit__page";
            slideActiv.nextElementSibling.classList = "slider-hit__page slider-hit__page_status_active";
            return
        }
};
hitBtnL.addEventListener("click", HandleSwapHit);
hitBtnR.addEventListener("click", HandleSwapHit);