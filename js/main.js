
//// scroll up button ////

const returnBtn = document.querySelector(".return-button");

returnBtn.addEventListener("click", (e) => {
    window.scrollTo({top: 0, behavior:'smooth'});
});

window.addEventListener("scroll", (e) => {

    if(window.scrollY > 700){
        returnBtn.style.opacity = 1;
    }
    else{
        returnBtn.style.opacity = 0;

    }
})

///// multi sliders /////

const sliders = document.querySelectorAll('.slider-container');


sliders.forEach((slider) => {

const slides = slider.querySelectorAll('.slide-card');

const slideImages = slider.querySelectorAll('.slide-card .image img');
    
const pageList = slider.querySelectorAll('.slide-numbers')

const nextBtn = slider.querySelector('.slider-controls .left-icon');

const prevBtn = slider.querySelector('.slider-controls  .right-icon');

let currentIndex = 0;
let totalSlides = slides.length;


nextBtn.addEventListener('click', nextSlide);

prevBtn.addEventListener('click', prevSlide);



function showSlide(currentIndex) {

    slides.forEach(slide => {
        slide.classList.add('none')
    });

    slides[currentIndex].classList.remove('none')
    if(slider.id == 'slider-1'){
        slides[currentIndex].childNodes[3].childNodes[7].children[currentIndex].classList.add('bg-blue')
        slideImages[currentIndex].classList.add('animate')

    }
    

}

function nextSlide(){
    currentIndex++;
    if(currentIndex >= totalSlides) {
        currentIndex = 0;
    }
    showSlide(currentIndex);
    clearInterval(nextSlide)
}

function prevSlide(){
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = totalSlides - 1;
    }
    showSlide(currentIndex);
    clearInterval(nextSlide)

}
  

    pageList.forEach(pages => { 
        const page = pages.children
        for(let i = 0;i < page.length;i++) {
            page[i].addEventListener('click', () => {
                currentIndex = i
                showSlide(currentIndex)            
            })
        }
    })

   


setInterval(nextSlide,5000)

showSlide(currentIndex);

});


