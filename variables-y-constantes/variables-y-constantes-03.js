let edad = prompt("ingrese su edad");

if(isNaN(edad)){
    console.log("Ingresa tu edad en digitos!");
}
else if(edad <= 0 || edad >= 130){
    console.log("Ingresa una edad valida!");
}
else if( edad >= 18){
    console.log("Eres mayor de edad");
}
else{
    console.log("Eres menor de edad");
}