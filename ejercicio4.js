let negrita = document.querySelectorAll('strong');

function highlight(){
    for (let i=0;i<negrita.length;i++){
        negrita[i].classList.add("color")
    }
}

function return_normal(){
    for (let i=0;i<negrita.length;i++){
        negrita[i].classList.remove("color")
    }
}