const promoSlider = document.querySelector("#promo__slider");
const sliderList = document.querySelector("#slider__list");
const sliderItems = document.querySelectorAll(".slider__item");
const backButton = document.querySelector("#back-button");
const nextButton = document.querySelector("#next-button");

let width = promoSlider.offsetWidth;
const animationSpeed = 2000;
const pause = 3000;
let currentSlide = 1; //2,3,4,5,6 (bo 6 slide to 1 obrazek, któy jest podmieniany po kryjomu na 1 slide potem)

//zrób tak, że dla każdej wartości currentSlide
      //margin listy jest przenoszony na currentSlide * width - ale płynnie
      //chyba że to przejście z 5 na 1 to wtedy podmianka
      //niech slide1 będzie 1 i ostatnim slidem xd
nextButton.addEventListener('click', event => {
  sliderList.style["margin-left"] = `-${width}`;
});
