const pi = 3.14159;
let radio = prompt("ingrese el radio de su circulo!");

let area = pi * radio ** 2;

if(isNaN(radio)){
    console.log("No has ingresado un numero valido!");
}
else{
    console.log("el area de tu circulo es " + area)
}
