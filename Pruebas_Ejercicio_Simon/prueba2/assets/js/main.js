let secuencia = [];
let secuenciaUsuario = [];

function encenderCasilla(id) {
    let color = document.getElementById(id);


    //NO CONSIGO ENTENDER ESTO NI BUSCANDO EN MOZILLA JS
    /*let tiempo = new Promise(resolve => {

        setTimeout(() => {
            rojo.style.backgroundColor= 'red';
            resolve();
        }, 2000);
    })
    */
   switch (id) {

    case 'tecla-1' :
        color.style.backgroundColor = 'red';
        break;

    case 'tecla-2' :
        color.style.backgroundColor = 'blue';
        break;

    case 'tecla-3' :
        color.style.backgroundColor = 'green';
        break;

    case 'tecla-4' :
        color.style.backgroundColor = 'yellow';
        break;
   }



    setTimeout(() => {
        color.style.backgroundColor = '#aaaaaaff';
    }, 2000);

    secuencia.push(id);
}


function adivinar(id) {
    secuenciaUsuario.push(id)
}

encenderCasilla('tecla-1');
encenderCasilla('tecla-2');
encenderCasilla('tecla-1');
encenderCasilla('tecla-3');

adivinar('tecla-1');
adivinar('tecla-2');
adivinar('tecla-1');
adivinar('tecla-3');


function mismoArray(array1, array2) {
    (array1.length === array2.length) ?  true : false;
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) return false 
    } return true;
}

let resultado = mismoArray(secuencia, secuenciaUsuario);
(resultado) ? console.log('Has ganado') : console.log('Has perdido');