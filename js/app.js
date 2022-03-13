const slider = document.querySelectorAll('.slider-img')
const dotNav= document.querySelectorAll('.dot')
const rightArrow = document.querySelector('.right-arrow')

let currentSidler = 1;

// active class add and remove

const dotNavigation =(manual)=>{
    slider.forEach((slide)=>{
        slide.classList.remove('active')
        dotNav.forEach((dot)=>{
            dot.classList.remove('active')
        });
    });

    slider[manual].classList.add('active')
    dotNav[manual].classList.add('active')
}

// dote click event add
dotNav.forEach((dot,i)=>{
    dot.addEventListener('click',()=>{
        dotNavigation(i)
        currentSidler=i;
    });
});
// slide
let sliderNum = 0;
const sliderSlide = ()=>{
    sliderNum++
    if(slider.length<=sliderNum){
        sliderNum = 0;
        dotNavigation(sliderNum);
    }else{
        dotNavigation(sliderNum);
    }
}
rightArrow.addEventListener('click',()=>{
    sliderSlide()
})