let texto = document.querySelector('p');
let mayor = document.querySelector('#mayor');
let menor = document.querySelector('#menor');
let fuente1=document.querySelector('#fuente1');
let fuente2=document.querySelector('#fuente2');
let fuente3=document.querySelector('#fuente3');
let fuente4=document.querySelector('#fuente4');
let colorInicial=document.querySelector('#color');
let tamañoInicial=12;

mayor.addEventListener('click',function(){
    tamañoInicial=tamañoInicial+2;
    let tamaño=parseInt(tamañoInicial);
    texto.style.fontSize=tamaño+"px";
})

menor.addEventListener('click',function(){
    tamañoInicial=tamañoInicial-2;
    let tamaño=parseInt(tamañoInicial);
    texto.style.fontSize=tamaño+"px";
})

fuente1.addEventListener('click',function(){
    texto.style.fontFamily="Cursive"
})

fuente2.addEventListener('click',function(){
    texto.style.fontFamily="Times new Roman"
})
 
fuente3.addEventListener('click',function(){
    texto.style.fontFamily="Verdana"
})

fuente4.addEventListener('click',function(){
    texto.style.fontFamily="Verdana"
})

colorInicial.addEventListener('click',function(){
    let letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
    let num = (Math.random()*15).toFixed(0);
    let resultado=letras[num];
 
    let colorNuevo = "";
    for(let i=0;i<6;i++){
        colorNuevo = colorNuevo + resultado ;
    }
    texto.style.color="#"+colorNuevo;
})