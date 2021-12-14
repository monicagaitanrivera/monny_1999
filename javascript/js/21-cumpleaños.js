"use strict"





var diaCumple = 9;//Dia del Cumpleanios
var mesCumple = 11;//Mes de Cumple 4=Abril
var anioCumple = 1999; //Anio de Cumple
var fechaNacimiento 

var edad = (DateTime.now.Subtract(fechaNacimiento).Days / 365);

if (DateTime.Now.Month <= mesCumple && DateTime.Now.Day <= diaCumple)
                proximoCumple = new DateTime(DateTime.Now.AddYears(1).Year, mesCumple, diaCumple);
            else
                proximoCumple = new DateTime(DateTime.Now.Year, mesCumple, diaCumple);
            

            //Definiremos los dias faltantes para el proximo cumple
            TimeSpan  = proximoCumple.Subtract(DateTime.Now);

            //Ahora Elaboramos el Mensaje
            StringBuilder  = new StringBuilder();
            console.log ("Usted Tiene {0} Años ", );
            console.log ("y tu Próximo Cumpleaños es: {0} Días", );
            console.log (", {0} Horas ", );
            console.log ("y {0} Minutos ", );

            log.ToString();
          

            