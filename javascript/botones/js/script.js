"use strict"

let nombreActual = "";

function cambiarNombre() {
    let nuevoAprendiz = "Juan esteban";
    /* Validar */
nombreActual = document.getElementById ("nombreAprendiz").innerHTML;
if (nombreActual ===nuevoAprendiz){
    mensajeUsuario();
}
else{
    document.getElementById("nombreAprendiz").innerHTML = nuevoAprendiz;
}
}
function retornarNombre() {
    let antiguoNombre = "Maryury";
    nombreActual = document.getElementById ("nombreAprendiz").innerHTML;
    if (nombreActual === antiguoNombre) {
        mensajeUsuario();
    }
    else {
        document.getElementById ("nombreAprendiz").innerHTML = antiguoNombre;
    }
}

function mensajeUsuario() {
    alert("El nombre ya fue cambiado con anterioridad.");
}