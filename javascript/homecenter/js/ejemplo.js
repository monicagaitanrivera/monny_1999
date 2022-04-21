"use strict"


let content1 = document.getElementById("divContent1");
let content2 = document.getElementById("divContent2");


let lblcerrarContent1 = document.getElementById("cerrarContent1");
let lblcerrarContent2 = document.getElementById("cerrarContent2");

lblcerrarContent1.addEventListener("click", mostrarContenedor2);
lblcerrarContent2.addEventListener("click", mostrarContenedor1);

function mostrarContenedor1() {
    content1.classList.add("contenedor-visible");
    content1.classList.remove("contenedor-oculto");
    content2.classList.add("contenedor-oculto");
    content2.classList.remove("contenedor-visible");
}

function mostrarContenedor2() {
    content2.classList.add("contenedor-visible");
    content2.classList.remove("contenedor-oculto");
    content1.classList.add("contenedor-oculto");
    content1.classList.remove("contenedor-visible");
}
