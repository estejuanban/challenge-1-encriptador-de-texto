//-------Selección de Elementos-------//
const btnEncriptar = document.querySelector(".encriptar");
const txtEncriptar = document.querySelector(".text-area-input");
const aviso = document.querySelector(".anotación");
const respuesta = document.querySelector(".text-area-output");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".copiar");
const btnDesencriptar = document.querySelector(".desencriptar");

// Contraseña para desencriptar
const PASSWORD = "ALURA";  // Reemplaza "mi_contraseña_segura" con la contraseña que desees

//-------Boton Encriptador-------//
btnEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        mostrarAviso("El campo de texto no debe estar vacio");
    } else if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
    } else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        respuesta.innerHTML = texto;
        btnCopiar.style.visibility = "inherit";
        contenido.remove();
    }
});

//-------Boton de Desencriptar-------//
btnDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, "");

    if (texto == "") {
        mostrarAviso("El campo de texto no debe estar vacio");
    } else if (texto !== txt) {
        mostrarAviso("No debe tener acentos y caracteres especiales");
    } else if (texto !== texto.toLowerCase()) {
        mostrarAviso("El texto debe ser todo en minúscula");
    } else {
        // Solicitar contraseña
        let contraseñaIngresada = prompt("Por favor, ingrese la contraseña para desencriptar:");

        if (contraseñaIngresada === PASSWORD) {
            texto = texto.replace(/enter/mg, "e");
            texto = texto.replace(/imes/mg, "i");
            texto = texto.replace(/ai/mg, "a");
            texto = texto.replace(/ober/mg, "o");
            texto = texto.replace(/ufat/mg, "u");

            respuesta.innerHTML = texto;
            btnCopiar.style.visibility = "inherit";
            contenido.remove();
        } else {
            mostrarAviso("Contraseña incorrecta. Intente nuevamente.");
        }
    }
});

//-------Boton de Copiar-------//
btnCopiar.addEventListener("click", e => {
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy");
});

//-------Función para Mostrar Avisos-------//
function mostrarAviso(mensaje) {
    aviso.style.background = "#0A3871";
    aviso.style.color = "#FFFF";
    aviso.style.fontWeight = "800";
    aviso.textContent = mensaje;

    setTimeout(() => {
        aviso.removeAttribute("style");
    }, 1500);
}