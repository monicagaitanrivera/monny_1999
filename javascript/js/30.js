"use strict"

function validar() {
    let nombreUsuario = document.getElementById("nombres").value ;

    if ( nombreUsuario === "") {
        alert ("Por favor ingrese el nombre del usuario");
    }
    
        let apellidousuario = document.getElementById("apellidos").value ;
    
    if (apellidousuario  === "") {
        alert ("Por favor ingrese el apellido  del usuario");
    }

    let descripcionusuario = document.getElementById("descripcion").value ;
    
    if (descripcionusuario  === "") {
        alert ("Por favor ingrese la consulta  del usuario");
    }else{
        alert ("los datos se ingreso con exito");
    }
    }

