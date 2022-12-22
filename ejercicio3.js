let boton=document.querySelector('button')
boton.addEventListener('click',function(){
    //Recogemos el id
    let idRecogido=document.querySelector('a').id;
    console.log(idRecogido)

    //Recogemos el type
    let tp=document.querySelector('p a').type;
    console.log(tp)

    //Recogemos el href
    let hrf=document.querySelector('p *').href;
    console.log(hrf)

    //Recogemos el target
    let tgt=document.querySelector('[target="_self"]').target;
    console.log(tgt)

    //Recogemos el hreflang
    let hl=document.querySelector('a').hreflang;
    console.log(hl)

    //Recogemos el rel
    let rel=document.querySelector('[id="w3r"]').rel;
    console.log(rel)
})