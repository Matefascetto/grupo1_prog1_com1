let form = document.querySelector(".login");
let mail = document.querySelector(".caja-email2")
let contra = document.querySelector(".caja-contraseña2")

let error_contraseña = document.querySelector(".noContra")
let error_email = document.querySelector(".noEmail")

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valida = true;

    if (mail.value == "") {
        error_email.style.display = "block";
        error_email.innerText = "Por favor complete el campo";
        valida = false;
    }

    if (contra.value == "") {
        error_contraseña.style.display = "block";
        error_contraseña.innerText = "Por favor complete el campo";
        valida = false;
    }

    if (valida){
      form.submit(); 
    }



})
