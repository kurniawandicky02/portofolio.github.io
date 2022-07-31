const nav = document.querySelector('.navbar'); 
const arrowBtn = document.getElementById('down-arrow');
const emailSection = document.querySelector('.email');
const webSection = document.querySelector('.web');
const serviceAnimation = document.querySelector('.service-title');
const skills = document.querySelector('.skills');
const card = document.querySelector('.g-col-6');
const arrowTop = document.querySelector('.arrow-top')

window.addEventListener('scroll', fixedNav);

function fixedNav() {
    if(window.scrollY > nav.offsetHeight + 170) {
        nav.classList.add('active')
        emailSection.classList.add('scroll')
        webSection.classList.add('scroll')
        serviceAnimation.classList.add('move')
        skills.classList.add('move')
        arrowTop.classList.remove('pageUp')
    } else {
        nav.classList.remove('active')
        emailSection.classList.remove('scroll')
        webSection.classList.remove('scroll')
        serviceAnimation.classList.remove('move')
        skills.classList.remove('move')
        arrowTop.classList.add('pageUp')
    }
}


// REMOVE ACTIVE CLASS ON LOAD //
window.addEventListener('load', () => {
    nav.classList.remove('active')
});





// AUTO TEXT EFFECT //

const textEl = document.getElementById('text')
const text = "~Hi, I'm Dicky Kurniawan :)"

let textIdx = 0;
writeText();

function writeText() {
    textEl.innerText = text.slice(0, textIdx)
    textIdx++

    if(textIdx > text.length) {
        textIdx = text.value.innerText
    }
    setTimeout(writeText, 300)
}









