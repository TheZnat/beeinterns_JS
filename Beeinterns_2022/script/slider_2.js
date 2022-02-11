let counter = 0;
const sliderLineSecond = document.querySelector('.slider-line-2');

document.querySelector('.slider-next-2').addEventListener('click',  function () {
    counter += 270;
    if(counter > 1080){
        counter = 0;
    }
    sliderLineSecond.style.left = -counter + 'px';
})

document.querySelector('.slider-prev-2').addEventListener('click',  function () {
    counter -= 270;
    if( counter < 0){
        counter = 1080;
    }
    sliderLineSecond.style.left = - counter + 'px';
})