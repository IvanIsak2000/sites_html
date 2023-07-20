const  tl = gsap.timeline({defauls: {duration: 0.5, easy: "power1.out"}});
const add = document.getElementById('add-case');
var complited_case =  document.getElementById('case');
var activate_cases_place = false


tl.fromTo('.add-place', {scale: 0.5}, {scale:1, easy:'powe1.out(1, 0.4)'});

add.addEventListener('click', () => {

    var number = 1
    var new_case_input_text = document.getElementById('new-case-input');

    if (new_case_input_text.value !== ''){
        var activate_cases_place = true;
        new_case_input_text.style.border ='0.2rem solid #23DC7E';
        gsap.to('.cases-place', {opacity:1});

        var el = document.getElementById('list');
        var node = document.createElement("li");
        link.setAttribute('value', 'www.google.it');
        el.appendChild(node);
        


        // document.getElementById('case').innerHTML = number +" . " +new_case_input_text.value ;
        number += 1 
   
    }
    else{new_case_input_text.style.border ='0.3rem solid #D93235'} 
    
    console.log(number) 
});

// complited_case.addEventListener('click', () =>{
//     gsap.to(complited_case, {opacity:0, duration:'easy 1s'})
// })


function startTime(){
    const today = new Date();
    const week = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = week[d-1] + " " + h + ":" + m ;
    setTimeout(startTime, 1000);
}
function  checkTime(i) {
    if (i < 10){i = "0" + i};
    return i;
}
