//inicializar el codigo en terminal (no html)
var str = '';

str = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, fuga? Tenetur, quidem officiis maxime assumenda eaque sed mollitia rerum repudiandae nihil facere reiciendis eius alias temporibus accusamus nam reprehenderit id';

var longitud = str.length;
var separar = str.split(' ').reverse();
var ultimaPalabra =  separar[0].toUpperCase();

console.log("la longitud de la cadena es " + longitud);

console.log(str.toLowerCase());

console.log("la ultima palabra de la cadena es " + ultimaPalabra);


