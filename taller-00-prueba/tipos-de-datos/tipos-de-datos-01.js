let respuesta = prompt("Posee un pase de conducir activo? S/N");
let pase = false;
respuesta = respuesta.toUpperCase();


if ( respuesta == "S"){
    pase = true;
    afirmar();
}
else if ( respuesta == "N"){
    pase = false;
    afirmar();
}
else{
    console.log("Porfavor ingrese una respuesta valida (S/N)");

}

function afirmar(){
if( pase == true ){
    console.log("Tiene permiso para conducir");
}
else if( pase == false){
    console.log("No tiene permiso para conducir");
}
}