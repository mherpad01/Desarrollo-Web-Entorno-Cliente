class Submarino {

    constructor() {
        this.x = 0;
        this.y = 0;

        console.log('El submarino se ha creado');
    }

    init( size ) {
        this.x = Math.round( Math.random() * ( size-1 )+1 );
        this.y = Math.round( Math.random() * ( size-1 )+1 );
        console.log( 'Posicion X: ',this.x,' Posicion Y: ',this.y );

    }

    move( size ) {
        let randomMove = Math.round( Math.random() * 3 );
        switch ( randomMove ) {
            case 0:
                (this.x === size) ? this.x -- : this.x ++;
                break;

            case 1:
                (this.x === 0) ? this.x ++ : this.x --;
                break;

            case 2:
                (this.y === size) ? this.y -- : this.x ++;
                break;

            case 3:
                (this.y === 0) ? this.y ++ : this.x --;
                break;
        }
        console.log( 'Posicion X: ',this.x,' Posicion Y: ',this.y );

        
    }

}

export { Submarino };