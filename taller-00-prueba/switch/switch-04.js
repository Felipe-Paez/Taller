let numero = prompt("Digite un # para seleccionar una de las siguientes opciones: 1-Cambiar usuario 2-Editar perfil 3-Cambiar Contraseña")

numero=Number(numero)

switch(numero){

    case 1:
         prompt("Cambia tu usuario");
         break;
     case 2:
         prompt("Editar tu perfil");
         break;
     case 3:
         prompt("Cambia tu contraseña");
         break;    
     default:
         prompt("Elije una opción correcta")
}
