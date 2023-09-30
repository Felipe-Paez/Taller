let respuesta = prompt("ingrese un numero");

if(isNaN(respuesta)){
    alert("Ingresa un numero valido!");
}
else if( respuesta % 2 == 0){
    alert(respuesta + " es un numero par");
}
else{
    alert(respuesta + " es un numero impar");
}