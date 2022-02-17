"use strict"

function expandirtexto() {
   let textoCompleto = "Los libros de autoayuda son una ayuda más para hacer frente a las dificultades de la vida diaria.<br>" +

   "De vez en cuando, no está de más leer uno de esos libros inspiradores que te cambian la vida y te transforman en una mejor persona. Estos libros, en muchos casos escritos por gente que ha tenido que aprender por sí sola de los malos momentos, son realmente útiles.<br>" + 

 "No hace falta decir que no todos los libros de autoayuda y superación personal merecen la pena. Por eso, hoy, te hemos preparado un listado de 13 libros que te harán reflexionar y te ayudarán a ser mejor en distintos campos de tu vida: trabajo, amor, amistad… Pinchando en el enlace indicado, puedes comprar el libro de autoayuda que más te convenza. ¡No te los pierdas!<br>" +​

 "Este libro, escrito por el psicólogo español Jesús Matos Larrinaga y editado por la editorial Zenith, tiene como objetivo principal ayudar a las personas a gestionar la tristeza y no dejar que el estado de ánimo decaído nos domine cuando nos sentimos mal. <br>" + 
 "<a href='javascript:void(0)' onclick='acortarTexto();'><br>Click aqui para continuar...</a>"  


  document.getElementById("long-text").innerHTML = textoCompleto;
}

function acortarTexto() {
    let textoCorto ="Los libros de autoayuda son una ayuda más para hacer frente a las dificultades de la vida diaria" + "<a href='javascript:void(0)' onclick='expandirTexto();'><br>Click aqui para continuar...</a>" + "</p>";

    document.getElementById("long-text").innerHTML = textoCorto;
}