//! metodos array

var productos = [
    {nombre: "Bici", precio: 10000},
    {nombre: "TV", precio: 20000},
    {nombre: "Libro", precio: 302},
    {nombre: "Calular", precio: 30000},
    {nombre: "Laptop", precio: 20000},
    {nombre: "Teclado", precio: 500},
    {nombre: "Audifono", precio: 300},
    {nombre: "Camara", precio: 50000},
];

//********************************************************
/* 
! Filter   
TODO: nos ayuda a filtrar siertas cosas
* El filter va a validar si algo es verdadero o falso, y lo agrega aun nuevo array.
* Este metodo no modifica el array original.
*/
var poreciosProductos = productos.filter((precios) => {
    return precios.precio <= 300;
});
console.log(poreciosProductos, '\n');//? Nuevo array
//********************************************************



//********************************************************
/*
! Map
TODO: Me va ayudar a mapear a siertos productos
* Este metodo no modifica el array original
*/
var nombreProductos = productos.map((producto) => {
    return producto.nombre;
});

console.log(nombreProductos, '\n');//? nuevo array
//********************************************************

//********************************************************
/*
! Find
TODO: Nos ayuda a encontrar algo adentro de el objeto
* Este metodo no modifica el array, genera un nuevo array con el valor que le pasemos. Si es que lo encuentra
* valida con true o false, si existe lo refresa y si no existe no.
*/

var encuentraProductos = productos.find(function(producto) {
    return producto.nombre === "Libro";
});

console.log(encuentraProductos, '\n');
//********************************************************


//********************************************************
/*
!forEach
TODO: No genara un nuevo array, solo va hacer el filtrado
*/
console.log(productos.forEach((producto) => {
    console.log(producto.nombre);
    console.log(producto.precio, '\n');
}));
//********************************************************


//********************************************************
/*
! some
TODO: Nos regresa una validacion de verdadero o falso, para los productos que cumplan esa validacion
* Genera un nuevo array
*/

var productosBaratos = productos.some((producto)=>{
    return producto.precio <= 300;
});

console.log(productosBaratos, '\n');
//********************************************************