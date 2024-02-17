let open_btns = document.querySelectorAll('button[data-modal]')
let close_btns = document.querySelectorAll('[data-close]')
let modalw = document.querySelector('.modal')

let tablist = document.querySelectorAll('.tabcontent')
let tabBtlist = document.querySelectorAll('.tabheader__item')

let slides = document.querySelectorAll('.offer__slide')
let next_btn = document.querySelector('.offer__slider-next')
let prev_btn = document.querySelector('.offer__slider-prev')

let total = document.querySelector('#total')
let totalJs = slides.length
let current = document.querySelector('#current')





open_btns.forEach((btn) => {
    btn.onclick = () => {
        modalw.classList.add('show', 'fade')
    }
})
close_btns.forEach((btn) => {
    btn.onclick = () => {
        modalw.classList.remove('show', 'fade')
    }
})

let currents = 1
let slideIndex = 0

if (totalJs <= 9) {
    total.innerHTML = '0' + totalJs
} else {
    total.innerHTML = totalJs
}
slideShow(slideIndex)



function slideShow(n) {

    if (n === slides.length) {
        slideIndex = 0
    }

    if (n < 0) {
        slideIndex = slides.length - 1
    }

    slides.forEach(slide => slide.classList.add('hide', 'fade'))
    slides[slideIndex].classList.remove('hide')

    if (slideIndex + 1 <= 9) {
        current.innerHTML = '0' + (slideIndex + 1)
    } else {
        current.innerHTML = slideIndex + 1
    }
}
next_btn.onclick = () => {
    slideIndex++
    slideShow(slideIndex)
}
prev_btn.onclick = () => {
    slideIndex--
    slideShow(slideIndex)
}


let Index = 0
tablist.forEach(tab => tab.classList.add('hide', 'fade'))
tablist[Index].classList.remove('hide')
tabBtlist[Index].classList.add('tabheader__item_active')

tabBtlist.forEach((btn, idx) => {
    btn.onclick = () => {
        Index = idx
        tablist.forEach(tab => tab.classList.add('hide'))
        tabBtlist.forEach(btn => btn.classList.remove('tabheader__item_active'))
        tablist[Index].classList.remove('hide')
        tabBtlist[Index].classList.add('tabheader__item_active')
    }
})



let deadline = '2024-04-10 00:00'
function lefttime(deadline) {
    let Tm = Date.parse(deadline) - Date.parse(new Date());



    let seconds = Math.floor((Tm / 1000) % 60)
    let minutes = Math.floor((Tm / 1000 / 60) % 60)
    let hours = Math.floor((Tm / 1000 / 60 / 60) % 24)
    let days = Math.floor(Tm / 1000 / 60 / 60 / 24)
    return {
        total: Tm,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}
function Timer() {
    let days = document.querySelector('#days')
    let hours = document.querySelector('#hours')
    let minutes = document.querySelector('#minutes')
    let seconds = document.querySelector('#seconds')

    function Time() {
        let tm = lefttime(deadline);

        days.innerHTML = tm.days;
        hours.innerHTML = tm.hours
        minutes.innerHTML = tm.minutes
        seconds.innerHTML = tm.seconds
    }
    Time();
    let interval = setInterval(Time, 1000);
}
Timer()