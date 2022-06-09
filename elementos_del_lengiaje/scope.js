// ! scoped

var miNombre = 'jake';

function saludar() {
    var miApellido = 'perdomo';
    return miNombre + " " + miApellido;
}

// ? no puedo llamarla ya que esta en local
// ! console.log(miApellido);

//? a contrario de la variable miNombre
console.log(miNombre);

console.log(saludar());