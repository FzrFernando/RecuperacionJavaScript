let form=document.querySelector('form');
let dni=document.querySelector('#dni');
let nombre=document.querySelector('#nombre');
let fechaNac=document.querySelector('#fecha');
let nenes=document.querySelectorAll('[type="radio"]');
let email=document.querySelector('#email');
let pagW=document.querySelector('#pag');
let contrasenna=document.querySelector('#pass');

const isRequired=value=> value===''?false:true;

const isBetween = (length, min, max) => length < min || length > max ? false : true;

const isDNIValid=(dni)=>{
    let dniValido = new RegExp("^[0-9]{2}.[0-9]{3}.[0-9]{3}-[a-zA-Z]$");
    return dniValido.test(dni);
}

const checkDNI=()=>{
    let valido=false;
    const dniNew=dni.value.trim()
    if (!isRequired(dniNew)){
        showError(dni,'El campo dni no puede estar en blanco')
    }
    else if (!isDNIValid(dniNew)){
        showError(dni,`Dni incorrecto`)
    }
    else {
        showSucess(dni)
        valido=true
    }
    return valido;
}

const nombreEntero=(nombre)=>{
    let cadena=new String(nombre)
    let nombreNuevo=cadena.trim();
    let cont=0;
    for (let i=0;i<nombreNuevo.length;i++){
        if (nombreNuevo[i]===' '){
            cont++;
        }
    }
    if (cont >= 1 && cont <= 3){
        return true
    }
    else{
        return false
    }
}

const checkNombre=()=>{
    let valido=false
    let nombreNew=nombre.value.trim()
    if (!isRequired(nombreNew)){
        showError(nombre,'El campo nombre no puede estar en blanco')
    }else if(!nombreEntero(nombreNew)){
        showError(nombre,'El nombre introducido no es correcto')
    }else {
        showSucess(nombre)
        valido=true
    }
    return valido
}

const adulto = (fechaNac)=>{
    const hoy=new Date();
    const fechaNacimiento=new Date(fechaNac);
    let edad=hoy.getFullYear()-fechaNacimiento.getFullYear();
    const meses=hoy.getMonth()-fechaNacimiento.getMonth()
    if (meses < 0){
        edad--;
    }
    if (edad >= 18){
        return true
    }else {
        return false
    }
}

const fechaNacimientoValid=()=>{
    let valido=false
    let fechaNacimiento=fechaNac.value.trim()
    if (!isRequired(fechaNacimiento)){
        showError(fechaNac,'El campo nombre no puede estar en blanco')
    }else if (!adulto(fechaNacimiento)){
        showError(fechaNac,'No tienes mas de 18 ')
    }else {
        showSucess(fechaNac)
        valido=true
    }
    return valido
}

nenes[0].addEventListener('click',function(e){
    document.querySelector('#numHijos').removeAttribute('hidden');
})

nenes[1].addEventListener('click',function(){
    document.querySelector('#numHijos').setAttribute('hidden',"true");
})

const isEmail=(email)=>{
    const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const emailValid=()=>{
    let valido=false;
    let emailNuevo=email.value.trim();
    if (!isRequired(emailNuevo)){
        showError(email,'El campo no puede estar en blanco')
    }else if (!isEmail(emailNuevo)){
        showError(email,'El email no tiene un formato correcto')
    }else {
        showSucess(email)
        valido=true
    }
    return valido;
}

const isPag=()=>{
    let valido=false
    let pg=pagW.value.trim();
    if (!isRequired(pg)){
        showError(pagW,'El campo no puede estar en blanco')
    }else {
        showSucess(pagW)
        valido=true
    }
    return valido
}

const checkPassword=()=>{
    let valido=false
    const min=8,max=10
    let password=contrasenna.value.trim()
    if (!isRequired(password)){
        showError(contrasenna,'El campo no puede estar vacio')
    }else if (!isBetween(password.length,min,max)){
        showError(contrasenna,'La contrasenna tiene que estar entre esos campos')
    }else {
        showSucess(contrasenna)
        valido=true
    }
    return valido
}

const showError=(input,message)=>{
    const formF=input.parentElement
    const error=formF.querySelector('small')
    error.textContent=message
}

const showSucess=(input)=>{
    const formF=input.parentElement
    const error=formF.querySelector('small')
    error.textContent=''
}

form.addEventListener('submit',function(e){
    e.preventDefault()
    let dniValido=checkDNI(),
    isNombreValido=checkNombre(),
    isFechaNacValido=fechaNacimientoValid(),
    isEmailValido=emailValid(),
    isPgValido=isPag(),
    isPassword=checkPass()

    let formValido=dniValido&&
    isNombreValido&&
    isFechaNacValido&&
    isEmailValido&&
    isPgValido&&
    isPassword

    if (formValido){
        
    }
})