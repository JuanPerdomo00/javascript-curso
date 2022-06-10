//! funcion constructora javascript :0

//! funcion constructora
function Carro(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}


//? forma de generar un nuevo objeto
var carroNuevo = new Carro("Toyota", "model3", 2020);
//console.log(carroNuevo);

var carroNuevo2 = new Carro("Tesla", "MOdel X", 2018);
//console.log(carroNuevo2);



/*
TODO: reto generar una funcion constructora y que me agrege nuevos autos
*/


var autos = [];

function Carros(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
}



for(var i=0; i < 30; i++) {
    var marca = prompt("Ingresa marca: ");
    var modelo = prompt("Ingresa modelo: ");
    var annio = prompt("Ingresa annio: ");

    autos.push(new Carros(marca, modelo, annio));

    console.log(autos[i])
}

console.log(autos.length);