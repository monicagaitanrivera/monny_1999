function intercambiar() {
    document.getElementById("kioto-pic1").src = "img/s5.jpg";
}

function retornar() {
    document.getElementById("kioto-pic1").src = "img/s4.jpg";
}
function intercambiarr() {
    document.getElementById("kioto-pic2").src = "img/s7.jpg";
}

function retornarr() {
    document.getElementById("kioto-pic2").src = "img/s6.jpg";
}
function intercambia() {
    document.getElementById("kioto-pic3").src = "img/S9.jpg";
}

function retorna() {
    document.getElementById("kioto-pic3").src = "img/S8.jpg";
}
function intercambi() {
    document.getElementById("kioto-pic4").src = "img/c1.jpg";
}

function retorn() {
    document.getElementById("kioto-pic4").src = "img/c2.jpg";
}
let btnAbrirPopup = document.getElementById("btn-abrir-popup");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("btn-cerrar-popup");

const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", abrirBusqueda);

const lblClose = document.getElementById("idCerrar");
lblClose.addEventListener("click", cerrarBusqueda);

function abrirBusqueda() {
    let removeEncabezado = document.getElementById("idHeader");
    removeEncabezado.classList.add("headerInvisible");
    let nuevoHeader = document.getElementById("header2");
    nuevoHeader.classList.remove("header2Invisible");
    nuevoHeader.classList.add("header2Visible");
}
function cerrarBusqueda() {
     let removerHeader2 = document.getElementById("header2");
    removerHeader2.classList.remove("header2Visible");
    removerHeader2.classList.add("header2Invisible");
    let addHeader1 = document.getElementById("idHeader");
    addHeader1.classList.remove("headerInvisible");
}
function cerrarPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("popup");
    popup.classList.remove("open-popup");
}
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
}