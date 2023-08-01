const  tl = gsap.timeline({defauls: {duration: 2, easy: "power1.out"}});
const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

const menu_button = document.querySelector('.menu-button');

tl.fromTo('.menu-button', {x:100, opacity: 0}, {x:0, opacity:1, easy: "power1.out"});


menu_button.addEventListener('click', ()=>{
    line1.style = 'transform: rotate(45deg) translate(5px, 6px);'
    line2.style = 'transform: rotate(-45deg) translate(10px, -7px);'
    line3.style = 'opacity:0;'
    
      
})

