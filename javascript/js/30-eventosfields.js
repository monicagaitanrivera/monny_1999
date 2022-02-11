"use strict"

function validarInfo(numeroDocumento) {
    let numDocumento = document.getElementById(numeroDocumento).value ;

    if (numDocumento === "") {
        alert ("El numero del documento es un dato obligatorio");
    }
            else {
                alert ("La informacion ha sido enviada con exito")
            }
        }
        
       

