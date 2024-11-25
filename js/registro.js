document.addEventListener("DOMContentLoaded", function () {
    let formulario = document.querySelector(".login");
    let cajaEmail = document.querySelector(".caja-email");
    let cajaContraseña = document.querySelector(".caja-contraseña");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evita el envío por defecto
        let isValid = true;

        // Validar si los campos están vacíos
        if (cajaEmail.value === "" || cajaContraseña.value === "") {
            alert("Todos los campos son obligatorios.");
            isValid = false;
        }

        // Si es válido, enviar el formulario
        if (isValid) {
            formulario.submit();
            window.location.href = "login.html"
        }
    });
});

