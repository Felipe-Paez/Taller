let x = prompt("Ingresa la coordenada X");
let y = prompt ("Ahora ingresa la coordenada Y");
let enun = "Tu coordenada se encuentra en el ";

if(isNaN(x) || isNaN(y)){
    console.log("los numeros que has ingresado no son validos!");
}
else if( x > 0 && y < 0 ){
    alert(enun + "cuadrante 2");
}
else if(x < 0 && y > 0){
    alert(enun + "cuadrante 4");
}
else if(x > 0 && y > 0){
    alert(enun + "cuadrante 1");
}
else{
    alert(enun + "cuadrante 3");
}