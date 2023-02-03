const slides = document.querySelectorAll('.slide')
console.log(slides) // [div.slide, div.slide, div.slide, div.slide.active, div.slide]
for (const selectedSlide of slides) {
    selectedSlide.addEventListener('click', ()=>{
        clearActiveSlide()
        selectedSlide.classList.add('active')
    })
}
function clearActiveSlide () {
    slides.forEach((slideArr)=>{
        slideArr.classList.remove('active')
    })
}