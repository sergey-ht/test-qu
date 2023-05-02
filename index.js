const slider = document.querySelector('.slider')
const images = document.querySelectorAll('.slider__img')
const sliderLine = document.querySelector('.slider__line')

const sliderNext = document.querySelector('.button__slider-next-1')
const sliderPrev = document.querySelector('.button__slider-prev-1')

let count = 0
let width 

sliderNext.addEventListener('click', nextSlider)
sliderPrev.addEventListener('click', prevSlider)

function init() { 
        console.log('resize')  
        width = document.querySelector('.slider').offsetWidth
        sliderLine.style.width = width * images.length + 'px'
        /* все изображения делаем равными ширине слайдера */
        images.forEach(item => {
            item.style.width = width + 'px'
            item.style.height = 'auto'  /* при изменении ширины высота автоматом */
        })
        rollSlider()    
}
    
    window.addEventListener('resize', init)
    init()


function nextSlider() {    
    count++
    if (count >= images.length) {
        count = 0
    }
    rollSlider()
}

function prevSlider() {   
    count--
    if (count < 0) {
        count = images.length - 1
    }
    rollSlider()
}

function rollSlider(){
    sliderLine.style.transform = `translateX(${-count * width}px)`
}

setInterval(()=> {
    nextSlider()
}, 5000)



/*--------slides-right---------*/

const $sr = document.querySelector('#sr')
const sliderNext2 = $sr.insertAdjacentHTML('beforeend','<button class="button__slider-next-2"><img src="./image/header-bottom/Arrow-right.png" alt="next2"></button>')
const sliderPrev2 = $sr.insertAdjacentHTML('beforeend','<button class="button__slider-prev-2"><img src="./image/header-bottom/Arrow-left.svg" alt="prev2"></button>')

let count2 = 0
 

sliderNext2.addEventListener('click', nextSlider2)
sliderPrev2.addEventListener('click', prevSlider2)

function init2() { 
    console.log('resize')  
    width = document.querySelector('#sr').offsetWidth
    sliderLine.style.width = width * images.length + 'px'
    /* все изображения делаем равными ширине слайдера */
    images.forEach(item => {
        item.style.width = width + 'px'
        item.style.height = 'auto'  /* при изменении ширины высота автоматом */
    })
    rollSlider2()    
}

window.addEventListener('resize', init2)
init2()


function nextSlider2() {    
count2++
if (count2 >= images.length) {
    count2 = 0
}
rollSlider2()
}

function prevSlider2() {   
count2--
if (count2 < 0) {
    count2 = images.length - 1
}
rollSlider2()
}

function rollSlider2(){
sliderLine.style.transform = `translateX(${-count2 * width}px)`
}

setInterval(()=> {
nextSlider2()
}, 5000)