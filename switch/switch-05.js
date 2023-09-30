let numero = prompt( 'Digite un # para ver el lado opuesto de las siguientes opciones: 1-Norte 2-Sur 3-Este 4-Oeste' );
numero = Number(numero);


switch( numero ) {
    case 1:
        console.log( 'Sur' );
        break;
    case 2:
        console.log( 'Norte' );
        break;
    case 3:
        console.log( 'Oeste' );
        break;
    case 4:
        console.log( 'Este' );
        break;
    default:
        console.log( 'Ingresa un numero valido!' );
}