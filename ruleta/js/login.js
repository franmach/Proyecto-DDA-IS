function showAlert(message) {
    const alertDialog = document.getElementById('alertDialog');
    document.getElementById('alertMessage').textContent = message; // Establece el mensaje
    alertDialog.showModal(); // Muestra el diálogo
}


function validateLogin() {
    const usuario = document.getElementById('txtLoginUsuario').value;
    const password = document.getElementById('txtLoginContrasena').value;


    if (usuario=="") {
        showAlert('Por favor ingresa un usuario.');
        return false;
    }

    if (password.length < 8) {
        showAlert('La contraseña debe tener al menos 8 caracteres.');
        return false;
    }

    return true;
}

// Definimos las funciones cambiarTexto y restaurarTexto directamente en el HTML
function cambiarTexto() {
    document.getElementById("registrarse").innerText = "Registrarse";
    const hoverSound = document.getElementById("hoverSound");
    hoverSound.currentTime = 0;
    hoverSound.play(); // Sonido al hover  
}
function restaurarTexto() {

    document.getElementById("registrarse").innerText = "¿Aun no estás registrado?";
}

function aRegistro() {
    window.location.href = 'registro.html'; // Redirige a la página de pregunta después de mostrar la categoría
    const menuSound = document.getElementById('menuSound');
    if (menuSound) menuSound.play(); // Sonido al cambiar de pantalla  
}

//variables para guardar datos
const nombreUsuario = document.getElementById("txtLoginUsuario");


document.getElementById('btnLogin').addEventListener('click', function (event) {
    // Comprueba si la función de validación devuelve falso  
    if (!validateLogin()) {
        event.preventDefault(); // Previene el envío del formulario si hay errores  
    } else {

        const usuario = {
            nombre: nombreUsuario.value,
        };
        localStorage.setItem('userInfo', JSON.stringify(usuario));
        // Si la validación es correcta, redirige a index.html  
        window.location.href = 'start.html';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    localStorage.removeItem('userInfo');
});