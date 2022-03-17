
class Automovil {
    constructor(marca, modelo, version, anyo, precio, kilometraje, motor, ciudad, imagen) {
        this.marca = marca;
        this.modelo = modelo;
        this.version = version;
        this.anyo = anyo;
        this.precio = precio;
        this.kilometraje = kilometraje;
        this.motor = motor;
        this.ciudad = ciudad;
        this.imagen = imagen;
    }
}

let auto1 = new Automovil("Maz", "9", "Xiaomi Redmi", 2015, 399900, 32, 2000, "Neiva", "img/images.jpg");
let auto2 = new Automovil("Maz", "9", "Samsung S21", 2021, 265000, 5, 2000, "Cali", "img/descarga.jpg");
let auto3 = new Automovil("Maz", "9", " Galaxy Note30 Mini", 2019, 181475, 256, 2000, "Medellín", "img/mazda3_2019.jpeg");
let auto4 = new Automovil("Maz", "9", "Galaxy Note30 Mini", 2019, 181475, 256, 2000, "Medellín", "img/descarga (1).jpg");
let auto5 = new Automovil("Toyota", "Corolla", "Seg", 2020, 81900000, 29090, 2000, "Neiva", "img/toyotaCorolla_2020.jpeg");

function mostrarVehiculo(auto) {
    let contenedorPrincipal = document.getElementById("main-content");
    let contenedorImg = document.createElement("div");
    contenedorPrincipal.appendChild(contenedorImg);
    contenedorImg.setAttribute("class", "style-contentImg");

    let imgAuto = document.createElement("img");
    imgAuto.setAttribute("src", auto.imagen);
    imgAuto.setAttribute("class", "img-style");
    contenedorImg.appendChild(imgAuto);

    let valorAuto = document.createElement("label");
/*     alert(auto.precio); */
    let precioFormat = new Intl.NumberFormat('es-ES', {}).format(auto.precio);
    
    
    let textoValorAuto = document.createTextNode("$" + precioFormat);
    valorAuto.appendChild(textoValorAuto);
    valorAuto.setAttribute("class", "style-precio");
    contenedorImg.appendChild(valorAuto);

    let descripcionVehiculo = document.createElement("label");
    let textoDescripcionVehiculo = document.createTextNode(auto.marca + " " + auto.version);
    descripcionVehiculo.appendChild(textoDescripcionVehiculo);
    descripcionVehiculo.setAttribute("class", "style-descripcion");
    contenedorImg.appendChild(descripcionVehiculo);

    /* let contenedorSeparador = document.createElement("div"); */
    let anyoVehiculo = document.createElement("label");
    let textoAnyoVehiculo = document.createTextNode(auto.anyo);
    anyoVehiculo.appendChild(textoAnyoVehiculo);

    
    let kilometrajeVehiculo = document.createElement("label");
    let textoKilometrajeVehiculo = document.createTextNode(auto.anyo + " - " + auto.kilometraje + "gb" + " - " + auto.ciudad);
    kilometrajeVehiculo.appendChild(textoKilometrajeVehiculo);
    kilometrajeVehiculo.setAttribute("class", "style-kilometraje");
    contenedorImg.appendChild(kilometrajeVehiculo);
    
    anyoVehiculo.setAttribute("class", "style-anyo");
}

window.addEventListener("keydown", function(event) {
    let busqueda = document.getElementById("textoBusqueda").value;
    if(event.key == "Enter") {
        limpiarVentana();
        if (busqueda == "Maz 9") {
            mostrarVehiculo(auto1);
            mostrarVehiculo(auto2);
            /* mostrarVehiculo(auto3); */
            mostrarVehiculo(auto4);
        }
        else if (busqueda == "Toyota Corolla") {
            mostrarVehiculo(auto5);
        }
        else {
        this.alert("No se han encontrado coincidencias.");
        }
    }
});
function limpiarVentana() {
    document.getElementById("main-content").innerHTML = "";
}
