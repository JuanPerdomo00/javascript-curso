// ! coercion implisitas y explisitas

// ? coerciones inplisitas !(es cuando el lenguaje nos ayuda my cambia de un tipo a otro tipo)
// ? coerciones explicitas !(es cuando obligamos a que un valor de un tipo cambie a otro tipo)

// * coercion inplisita
var a = 4 + '2';
var b = 3 * '3';

//* coercion explicitas
var a = 20;
var b = a + '2';
console.log(b);

var c = String(a);
console.log(typeof c);
