const body = document.body
const navMobile = document.getElementById("navbarMobile")
const bars = document.querySelector("#bars")
const mark = document.querySelector("#mark")
const accordionBar = document.querySelector("#accordionBar")
const main = document.querySelector("main")

function openHeader(z) {
     body.style.overflow = (body.style.overflow === 'hidden') ? 'auto' : 'hidden'
    z ? navMobile.classList.remove('translate-x-[70vw]') : navMobile.classList.add('translate-x-[70vw]')
    z ? bars.classList.add('hidden') : bars.classList.remove('hidden')
    z ? mark.classList.remove('hidden') : mark.classList.add('hidden')
    
}
let flag = false;
const accordion = document.querySelectorAll(".accordion");
const arrow = document.querySelectorAll(".arrow")
function accordionFooter(z) {
    accordion[z].classList.toggle("h-0")
    accordion[z].classList.toggle("opacity-0")
    arrow[z].classList.toggle('rotate-180')
    console.log(arrow[z]);


}

