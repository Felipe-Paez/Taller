let numero = prompt("Ingrese un numero")

if(isNaN(numero)){
    console.log("ingrese un numero valido")
}
else if( numero == 0){
    console.log("tu numero es un 0")
}
else if ( numero > 0){
    console.log("tu numero es positivo")
}
else{
    console.log("tu numero es negativo")
}