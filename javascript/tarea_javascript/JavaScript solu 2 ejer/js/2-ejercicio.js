"use strict"

"use strict"

let fecha1 = new Date('12/04/2021');
let fecha2 = new Date('11/09/2022');

let miliSegundoDias = 24 * 60 * 60 * 1000;

let miliSegundoTranscurridos = Math.abs(fecha1.getTime() -fecha2.getTime());

let diasTrancurridos = Math.round(miliSegundoTranscurridos/miliSegundoDias);
if (fecha2===fecha2){
    console.log('Felicitaciones hoy es tu cumpleaños.')

}else{
console.log('Faltan',diasTrancurridos, 'dias para tu cumpleaños.');
}

