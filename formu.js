    const btnSignIn = document.getElementById("sign-in");
        btnSignUp = document.getElementById("sign-up");
        formRegister = document.querySelector(".register");
        formLogin = document.querySelector(".login");

    btnSignIn.addEventListener("click", (e) =>{
        formRegister.classList.add("hide");
        formLogin.classList.remove("hide");
    })

    btnSignUp.addEventListener("click", (e) =>{
        formLogin.classList.add("hide");
        formRegister.classList.remove("hide");
    })

    document.addEventListener("DOMContentLoaded", function() {
        const form = document.querySelector('.form');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Evitar que el formulario se envíe automáticamente

            // Validar campos aquí
            const nombres = document.querySelector('input[placeholder="Nombres"]').value;
            const apellidos = document.querySelector('input[placeholder="Apellidos"]').value;
            const email = document.querySelector('input[placeholder="Correo Electrónico"]').value;
            const usuario = document.querySelector('input[placeholder="Usuario"]').value;
            const pass1 = document.querySelector('input[placeholder="Contraseña"]').value;
            const pass2 = document.querySelector('input[placeholder="Repetir la contraseña"]').value;

            if (!nombres || !apellidos || !email || !usuario || !pass1 || !pass2) {
                alert('¡Hey! Todos los campos son requeridos.'); // Podrías hacer algo más elegante, pero esto es directo.
                return;
            }

            if (pass1 !== pass2) {
                alert('Las contraseñas no coinciden.');
                return;
            }

            // Si llegamos hasta aquí, el formulario es válido y podrías enviar los datos al servidor si es necesario.
            alert('Formulario válido. ¡Registro exitoso!');
        });
    });

            // Preguntar el nombre
            var nombre = prompt("Ingresa tu nombre:");

            // Saludar con el nombre ingresado
            alert("¡Hola " + nombre + "! ¿Cómo estás hoy?");