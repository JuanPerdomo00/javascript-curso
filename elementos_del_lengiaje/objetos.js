/*
TODO: Los objetos se manejan con propiedades: es ina convinacion entre palabras clave y valor, o como en python ecimos key,velue
? El this hace referencia al objeto global en este caso miCarro
*/


var miCarro = {
//* key     value
    marca: "Toyota",
    modelo: "full",
    annio: 2020,
    detallesDelCarro: function ()  {
        console.log(`Auto ${this.modelo} ${this.annio}`);
    }
};

//? traer el objeto
console.log(miCarro);

// como accerder a algo espesifico
console.log(miCarro.modelo);
console.log(miCarro.marca);
console.log(miCarro.annio);

console.log(miCarro.detallesDelCarro());