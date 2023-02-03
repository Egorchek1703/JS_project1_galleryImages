const arraySliders = document.querySelectorAll('.slide')
console.log(arraySliders)
function clearActive (){
    arraySliders.forEach((elem)=>{
        elem.classList.remove('active')
    })
}

for (const someSlide of arraySliders){
    someSlide.addEventListener('click', ()=>{
        clearActive()
        someSlide.classList.add('active')
    })
}