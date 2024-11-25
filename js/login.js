let form = document.querySelector(".login");

let email = document.querySelector(".caja-email");
let contraseña = document.querySelector(".caja-contraseña");

let noemail = document.querySelector(".invalid-feedback.email");
let nocontra = document.querySelector(".invalid-feedback.contraseña");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    let verdad = true;

    
    if (email.value == "") {
        noemail.style.display = "block";
        noemail.innerText = "Por favor complete el campo email.";
        verdad = false;
    } else {
        noemail.style.display = "none"; 
    }

   
    if (contraseña.value == "") {
        nocontra.style.display = "block";
        nocontra.innerText = "Por favor complete el campo contraseña.";
        verdad = false;
    } else {
        nocontra.style.display = "none"; 
    }

    
    if (verdad) {
        form.submit();
    }
});