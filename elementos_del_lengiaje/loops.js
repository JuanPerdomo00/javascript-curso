// ! ciclos en javascript

var programadores = ['jake', 'santi', 'victor', 'antonio'];


saludar = () => {
    for(let i=0; i < programadores.length; i++) {
        if(programadores[i] === 'victor'){
            console.log('\nVictor futuro desarrollador web fullstack\n');
        } else if (programadores[i] === 'jake'){
            console.log('\njake futuro desarrollador wed fullstack y sre\n');
        } else {
            console.log(`Futuros porgramadores => ${programadores[i]}`);
        }
        
    }
}


for(let programador of programadores) { 
    console.log(programador);
}