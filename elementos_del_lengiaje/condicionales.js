// ! condicionales em js
if (false) {
    console.log('hi');
} else if (true) {
    //console.log('hilo');
} else {
    console.log("bye");
}


var nombre = 'jake';
var edad = 13;


validarEdad = (name, edad) => {
    if (name === "jake" && edad === 19) {
        console.log(`${name} estas de vuelta y con ${edad} jsjs`);;
    }
    else if (edad >= 18) {
        console.log(`${name} eres mayor de edad`)
    }
    else {
        console.log(`${name} eres menor de edad`);
    }
}

//validarEdad(nombre, edad);

//?operador ternaro
var condicion = (edad >= 18) ? 'es mayor': 'es menor';

console.log(condicion);