const hitBtnL = document.querySelector("#slider-hit__button_L");
const hitBtnR = document.querySelector("#slider-hit__button_R");
const hitCount1 = document.querySelector('#slider-hit__counter_1');
const hitCount2 = document.querySelector('#slider-hit__counter_2');


function HandleSwapHit (e) { 
    console.log(e.target)
};
hitBtnL.addEventListener("click", HandleSwapHit);