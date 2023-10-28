let mes = prompt( 'Digite el # de un mes del año' );
mes = Number(mes);


switch( mes ) {
    case 1:
        console.log( '31 dias' );
        break;
    case 2:
        console.log( '28 dias o 29 en año bisiesto' );
        break;
    case 3:
        console.log( '31 dias' );
        break;
    case 4:
        console.log( '30 dias' );
        break;
    case 5:
        console.log( '31 dias' );
        break;
    case 6:
        console.log( '30 dias' );
        break;
    case 7:
        console.log( '31 dias' );
        break;
    case 8:
        console.log( '31 dias' );
        break;
    case 9:
        console.log( '30 dias' );
        break;
    case 10:
        console.log( '31 dias' );
        break;
    case 11:
        console.log( '30 dias' );
        break;
    case 12:
        console.log( '31 dias' );
        break;
    default:
        console.log( 'El mes ' + mes + ' no existe' );
}