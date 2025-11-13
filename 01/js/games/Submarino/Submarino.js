class Submarino {

    constructor() {
        this.x = 0;
        this.y = 0;

        console.log('El submarino se ha creado');
    }

    init(size) {
        this.x = Math.round(Math.random() * (size-1)+1);
        this.y = Math.round(Math.random() * (size-1)+1);
        console.log('Posicion X: ',this.x,' Posicion Y: ',this.y);

    }


}

export { Submarino };