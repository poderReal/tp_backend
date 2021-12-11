const enviarFormulario = (e)=>{
    e.preventDefault();
    // console.log("estoy enviandome pero me retuvieron para examinarme");
    let inputEmail = document.querySelector("#email");
    if (inputEmail.value.length == 0){
        let divError = document.querySelector("#errorEmail");
        divError.innerHTML = 'Por favor, complete con su Email';
        divError.style.cssText= 'background:red;color:white';
        return false;

    }else{
        let divError = document.querySelector("#errorEmail");
        divError.innerHTML = '';
    }
    let inputNombre = document.querySelector("#nombre");
    if (inputNombre.value.length == 0){
        let divError = document.querySelector("#errorNombre");
        divError.innerHTML = 'Por favor, introduzca su nombre';
        divError.style.cssText = 'background:red;color:white';
        return false;
  
    }else{
        let divError = document.querySelector("#errorNombre");
        divError.innerHTML = '';
    }
    let inputApellido = document.querySelector("#apellido");
    if (inputApellido.value.length == 0){
        let divError = document.querySelector("#errorApellido");
        divError.innerHTML = 'Por favor, introduzca su apellido';
        divError.style.cssText = 'background:red;color:white';
        return false;
    }else{
        let divError = document.querySelector("#errorApellido");
        divError.innerHTML = '';
    }
}