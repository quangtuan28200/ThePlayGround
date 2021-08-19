var bar = document.querySelector('.nav-rsp__icon');
var bar__list = document.querySelector('.nav-rsp__list');
var isActive = false;

bar.onclick = (e) =>{
    isActive = !isActive;
    if(isActive){
        e.stopPropagation()
        bar__list.classList.add('bar-active');
    }
}

document.onclick = () =>{
    isActive=false;
    bar__list.classList.remove('bar-active');
}