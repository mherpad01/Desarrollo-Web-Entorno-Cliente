//importar el juego del submarino
import { Tablero } from "./games/Submarino/Tablero.js";

const config = {
    size: 10
}

let newTablero = new Tablero(config.size);
newTablero.init(config);



//plantilla interfaz
function creaGridTemplate(plantilla, tabla) {

    tabla.style.gridTemplateColumns = `repeat(${config.size}, 1fr)`;
    Array.from({ length: config.size * config.size }, (_, i) => {
        const clon = plantilla.content.cloneNode(true);
        const casilla = clon.querySelector('.casilla')
        casilla.textContent = ` ${(i % config.size) + 1}, ${Math.floor(i / config.size) + 1}`;
        casilla.addEventListener('click', (event) => {
            if (newTablero.Submarino.x === (i % config.size) + 1 && newTablero.Submarino.y === Math.floor(i / config.size) + 1) {
                console.log('Has ganado!')
                alert('WIN');
                event.target.style.backgroundColor = 'green';

            }
            else
                console.log("Fallastes!")
                newTablero.Submarino.move(config.size);
        });
        casilla.dataset.fila = Math.floor(i / config.size);
        casilla.dataset.columna = i % config.size;
        tabla.appendChild(clon);
    });
}

creaGridTemplate(document.getElementById('casilla-template'),
    document.getElementById('tabla'));