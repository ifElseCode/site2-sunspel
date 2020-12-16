const carouselSlider = document.querySelector('.carousel__slider');
const carouselItems = document.querySelectorAll('.carousel__item');
const carouselControlLeft = document.querySelector('.carousel__control--left');
const carouselControlRight = document.querySelector('.carousel__control--right');

const width = carouselItems[0].offsetWidth;

let counter = 0;
carouselControlRight.addEventListener('click', () => {
    if (counter === carouselItems.length - (window.innerWidth === 768 ? 4 : 2)) return;
    counter++;
    carouselSlider.style.transform = `translateX(${-width * counter}px)`;
});

carouselControlLeft.addEventListener('click', () => {
    if (counter === 0) return;
    counter--;
    carouselSlider.style.transform = `translateX(${-width * counter}px)`;
});
