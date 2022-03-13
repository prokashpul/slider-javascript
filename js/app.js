const slider = document.querySelectorAll('.slider-img')
const dotNav= document.querySelectorAll('.dot')

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
