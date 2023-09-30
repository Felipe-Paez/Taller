let primerNum = prompt("Ingresa el primer numero de la suma");
let segundoNum = prompt ("Ingresa el segundo numero de la suma");

if(isNaN(primerNum) || isNaN(segundoNum)){
    console.log("los numeros que has ingresado no son validos!");
}
else{
    primerNum = Number( primerNum );
    segundoNum = Number( segundoNum );
    let resultado = primerNum + segundoNum;
    console.log("el resultado de tu suma es " + resultado);
}