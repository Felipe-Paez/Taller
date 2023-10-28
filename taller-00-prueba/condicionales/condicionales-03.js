let edad = prompt("ingrese su edad");

if(isNaN(edad)){
    console.log("Ingresa tu edad en digitos!");
}
else if(edad <= 0 || edad >= 130){
    console.log("Ingresa una edad valida!");
}
else if( edad > 0 && edad < 13){
    console.log("Eres un niño");
}
else if( edad > 12 && edad < 18){
    console.log("Eres un adolescente");
}
else if( edad > 17 && edad < 24){
    console.log("Eres un joven adulto")
}
else{
    console.log("Eres un adulto")
}