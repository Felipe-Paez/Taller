let miNumero = 17;
let numeroUser = prompt("ingresa un numero");

if(isNaN(numeroUser)){
    console.log("Has ingresado un valor invalido, prueba ingresar un numero");
}
else if (miNumero == numeroUser){
    console.log("Que casualidad hemos elegido el mismo numero!");
}
else if(miNumero >= numeroUser){
    console.log("Tu numero es menor que el mio");
}
else{
    console.log("Tu numero es mayor que el mio");
}