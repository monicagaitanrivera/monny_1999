let btnAbrirPopup = document.getElementById("btn-abrir-popup");
let overlay = document.getElementById("overlay");
let popup = document.getElementById("popup");
let btnCerrarPopUp = document.getElementById("btn-cerrar-popup");
 


const lupa = document.getElementById("idLupa");
lupa.addEventListener("click", miFunction);


function miFunction() {
    document.getElementById("header1").innerHTML = "";
    llamarNuevaVentana();
}

function llamarNuevaVentana() {
    let contenedorNuevo = document.createElement("div");
    let contenedorOld = document.getElementById("header1");
    contenedorOld.appendChild(contenedorNuevo);
    contenedorNuevo.setAttribute("class", "contenedor-nuevo");

    let iconoLupa = document.createElement("img");
    let contenedor = document.getElementById("header1");
    contenedor.appendChild(iconoLupa);
    iconoLupa.setAttribute("src", "img/lupa.png");
    iconoLupa.setAttribute("class", "lupa-nueva");

    let inputNuevo = document.createElement("input");
    contenedor.appendChild(inputNuevo);
    inputNuevo.setAttribute("type", "text");
    inputNuevo.setAttribute("class", "input-nuevo");
}
function openPopup() {
    let popup = document.getElementById("popup");
    popup.classList.add("open-popup");
    
    
}
function ocultarFormulario(){
    let from = document.getElementById("popup");
    from.classList.remove("open-popup");
}