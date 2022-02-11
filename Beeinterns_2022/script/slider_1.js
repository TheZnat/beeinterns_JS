let offSet = 0;
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.slider-next').addEventListener('click',  function () {
    offSet += 270;
    if(offSet > 1080){
        offSet = 0;
    }
    sliderLine.style.left = -offSet + 'px';
})

document.querySelector('.slider-prev').addEventListener('click',  function () {
    offSet -= 270;
    if(offSet < 0){
        offSet = 1080;
    }
    sliderLine.style.left = -offSet + 'px';
})