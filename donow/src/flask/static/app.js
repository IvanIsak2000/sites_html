const  tl = gsap.timeline({defauls: {duration: 0.5, easy: "power1.out"}});
const add_task_button = document.querySelector('#add-task');
const input_with_text = document.querySelector('#new-task-input');

tl.fromTo('.add-place', {scale: 0.5}, {scale:1, easy:'powe1.out(1, 0.4)'});

add_task_button.onclick = function(){
    if(input_with_text.value.length == 0){
        alert("Please enter a task name");
        input_with_text.style.border ='0.3rem solid #D93235' ; 
        input_with_text.value ='';
    }

    else if (input_with_text.value.length >= 70){
        alert("Please enter a task name with lenght < 70 symbols");
        input_with_text.style.border='0.3rem solid #D93235';
        input_with_text.value ='';
    }

    else {  
        document.querySelector('#tasks').innerHTML += `
            <div class='task'>
                <button class='taskname'>
                    ${document.querySelector('#new-task-input').value}
                </button>
            </div>
        `;
        var current_tasks = document.querySelectorAll(".taskname");
        for(var i=0; i<current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }
        input_with_text.value =''
        input_with_text.style.border ='#4F4F4F'
    }
}

function Clock(){
    const today = new Date();
    const week = ['Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.', 'Sun.'];
    let d = today.getDay();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML = week[d-1] + " " + h + ":" + m ;
    setTimeout(Clock, 1000);
}
function  checkTime(i) {
    if (i < 10){i = "0" + i};
    return i;
}
