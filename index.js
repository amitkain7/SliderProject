const left = document.querySelector(".arrow-left");
const right = document.querySelector(".arrow-right");
const slider = document.querySelector(".slider");
const images = document.querySelectorAll(".image");


let slideNumber =1;
const length = images.length;


const slideNext = () => {
    slider.style.transform = `translateX(-${slideNumber * 400}px)`;
    slideNumber++;
}

const getFirstslide = () => {
    slider.style.transform = `translateX(0px)`;
    slideNumber =1;
}

const slidePrev = () => {
    slider.style.transform = `translateX(-${(slideNumber -2) *400}px )`;
    slideNumber--;
}

const getLastslide = () => {
    slider.style.transform = `translateX(-${(length-1) *400}px)`;
    slideNumber = length;
}



left.addEventListener("click", () => {
   slideNumber > 1 ? slidePrev() : getLastslide();

});

right.addEventListener("click", () => {
  slideNumber < length ? slideNext() : getFirstslide();
 

});