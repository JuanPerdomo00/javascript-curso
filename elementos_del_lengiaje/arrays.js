// ! arrays en javascript

// array con elementos
var frutas = ['🍎', '🍐', '🍓','🍊','🍉'];

// elementos de array
console.log(frutas.length);

// aceder a cada elemento
console.log(frutas[0]); // 🍎


// metodos de array
// agregar elementos y quitar elementos

var masFrutas = frutas.push('🥥'); // se agrega al final del array

console.log(frutas[5]);

// eliminar ultimo elemneto
var ultimo = frutas.pop('🥥');
console.log(frutas);


var nuevaLongitud = frutas.unshift('🥝'); // agrega elemnto al inicio
console.log(frutas[0]);

var borrarFruta = frutas.shift([0]);// borrar elemnto
console.log(frutas);


var posicion = frutas.indexOf('🍓'); // manda a llamar en que poscion se encuentra, si es que no lo sabemos o mas simple es buscar un elemnto
console.log(posicion);





























