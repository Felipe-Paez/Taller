//inicializar en terminal
let numero = 11;
let isPair = false;

if( numero % 2 == 0 ) {
    isPair = true;
}
else {
    isPair = false;
}

console.log(isPair? "Es par" : "Es impar")