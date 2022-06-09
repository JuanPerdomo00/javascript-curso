// ! switch en javascript

//switch (4) {
    //case 1:
        //console.log(1);
        //break;
    //case 2:
        //console.log(2);
        //break;
    //case 3:
        //console.log(3);
        //break;
    //default:
        //console.log(undefined);
//}

var mano1 = 'piedra';
var mano2 = 'papel';
var mano3 = 'tijera';
var user = 'jakepy';
var sys = 'mac';



var game = (opUser, opMaquina) => {
    switch (true) {
        case opUser === mano1 && opMaquina === mano3:
            console.log('User gana');
            break
        case opUser === mano2 && opMaquina === mano1:
            console.log('User gana');
            break
        case opUser === mano3 && opMaquina === mano2:
            console.log('User gana');
            break
        default:
            console.log('sys gana');
    }
}


game(mano1, mano3);