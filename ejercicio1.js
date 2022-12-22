const list=document.querySelector('ul');
const listWish=document.querySelector('#wishlist');

list.addEventListener('click',function(e){
    let flag = false;
    const wish = Array.from(listWish.children)
    for(let i=0; i < wish.length; i++) {
        if(wish[i].firstChild.textContent === e.target.dataset.name) {
            flag = true;
        }
    }

    if(!flag) {
        let newSpan=document.createElement('span');
        let newList=document.createElement('li');
        let boton=document.createElement('button');
        boton.textContent="Eliminar";
        boton.setAttribute("data-name", e.target.dataset.name)
        newSpan.textContent=e.target.dataset.name
        newSpan.setAttribute("class","color");
        newList.appendChild(newSpan)
        newList.appendChild(boton)
        wish.appendChild(newList);
    }   
})

listWish.addEventListener('click',function(e){
    for(let i=0; i < listWish.children.length; i++) {
        if(listWish.children[i].firstChild.textContent === e.target.dataset.name) {
            listWish.children[i].classList.remove("color")
            listWish.children[i].remove();
        }
    }
})