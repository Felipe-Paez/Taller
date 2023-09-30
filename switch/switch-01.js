let primeraNota = prompt("Ingrese su primera nota");
let segundaNota = prompt("Ingrese su segunda nota");
let terceraNota = prompt("Ingrese su tercera nota");
let declaracion = undefined;
primeraNota = Number(primeraNota);
primeraNota = parseFloat(primeraNota);
segundaNota = Number(segundaNota);
segundaNota = parseFloat(segundaNota);
terceraNota = Number(terceraNota);
terceraNota = parseFloat(terceraNota);
let nota = (primeraNota + segundaNota + terceraNota)/ 3;


nota = Number( nota );
nota = parseFloat(nota);



if(isNaN(nota) || nota < 0 || nota > 5){
    declaracion = 1;
}
else if (nota < 2.5){
    declaracion = 2;
}
else if (nota > 2.4 && nota < 3.5){
   declaracion = 3;
}
else if (nota > 3.4 && nota < 4.1){
    declaracion = 4;
}
else{
    declaracion = 5;
}

switch(declaracion){
    case 1:
    alert("Ingresa notas validas");
    break;
    case 2:
    alert('Insuficiente, has perdido la materia');
    break;
    case 3:
    alert('Insuficiente, tienes derecho a habilitar');
    break;
    case 4:
    alert ('Aceptable');
    break;
    case 5:
    alert ('Excelente')
    break;
}