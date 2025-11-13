import { Submarino } from "./Submarino.js";

class Tablero {

    constructor( size ) {
        this.size = 0;
        this.Submarino = new Submarino();
    }

    //paso tamaños
    init( config ) {
        this.size = config.size;
        this.Submarino.init(this.size);
    }

    shot(x, y) {
        let ubicacion = (this.submarino.x == x && this.submarino.y == y) ?  true :  false; 
    }


}




export { Tablero }