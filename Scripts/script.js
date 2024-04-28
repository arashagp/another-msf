const sliders = document.getElementsByClassName('slidder');
const dotSliders = document.getElementsByClassName('dot-slide');
const next = document.querySelector('.next');
const prev = document.querySelector('.perv');

let i = 0;

next.addEventListener('click' , () => {
    i++;
    if(i >= sliders.length){
        i = 0;
    }
    notActive();

    sliders[i].style.display = "block";

});

prev.addEventListener('click' , () => {
    i--;
    console.log(i);
    if(i < 0){
        i = sliders.length - 1;
    }
    notActive();

    sliders[i].style.display = "block";

    dotSliders[i].classList.add("active");

});

function notActive(){
    for(let i = 0 ; i < sliders.length ; i++){
        sliders[i].style.display = "none";
    }
}