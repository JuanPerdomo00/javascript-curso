//! while en javascript

var estudantes = ['jakepy', 'lily', 'antoni', 'fabiana', 'andrea'];


var saludar = (estudiante) => {
    console.log(`Hola ${estudiante}`);
}

//var i = 0;
//while(i < estudantes.length) {
    //saludar(estudantes[i]);
  //  i += 1;
//}

while(estudantes.length > 0) {
    console.log(estudantes)
    var estudiante = estudantes.shift();
    saludar(estudiante);
}