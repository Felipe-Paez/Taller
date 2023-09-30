let celsius = prompt("ingresa tu temperatura en grados celsius");

let fahrenheit = celsius * 1.8 + 32;


if (isNaN(celsius)){
    console.log("No has ingresado un numero valido!");
}
else{
console.log("la temperatura en grados fahrenheit es " + fahrenheit);
}
