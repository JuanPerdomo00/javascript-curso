/*
@author: jakepy
TODO: 
piedra papel o tijera en javascript, primer reto.

? tres variables, 'pidra' 'papel' 'tijera'
? crear la funcion que reciba los parametros
? crear la logica con condicionales, dentro de la funcion
? validar logiaca y pasar argumentos
*/ 

var mano1 = 'piedra';
var mano2 = 'papel';
var mano3 = 'tijera';
var user = 'jakepy';
var sys = 'mac';


var system = (system) => {
    if(system === 'linux' || system === 'mac' || system === 'windows'){
        console.log(`Te enfrentaras contra tu maquina -> ${system} xd`);
    } else {
        console.log('pass');
    }
}


// ! funcion de logica
var juego = (usuario, maquina, opUser, opMaquina) => {
    if (maquina) {
        console.log(`${usuario} welcome \n`);
        system(sys);
        if (opUser === mano1 && opMaquina === mano3) {
            console.log(`${usuario} gano con ${mano1}`);
        } else if (opUser === mano2 && opMaquina === mano1) {
            console.log(`${usuario} gana con ${mano2}`);
        } else if (opUser === mano3 && opMaquina === mano2) {
            console.log(`${usuario} gano con ${mano3}`);
        } else {
            console.log(`Gano la maquina ${maquina}`);
        }

    } else {
        console.log('error');
    }
}

juego(user, sys, mano2, mano1);