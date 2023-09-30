let primerNum = prompt("Ingresa el primer numero");
let segundoNum = prompt ("Ingresa el segundo numero");

if(isNaN(primerNum) || isNaN(segundoNum)){
    console.log("los numeros que has ingresado no son validos!");
}
else{
    primerNum = Number( primerNum );
    segundoNum = Number( segundoNum );
    let resultadoSuma = primerNum + segundoNum;
    let resultadoResta = primerNum - segundoNum;
    let resultadoMultiplicacion = primerNum * segundoNum;
    let resultadoDivision = primerNum / segundoNum;
    console.log("el resultado de la suma es " + resultadoSuma);
    console.log("el resultado de la resta es " + resultadoResta);
    console.log("el resultado de la multiplicacion es " + resultadoMultiplicacion);
    console.log("el resultado de la division es " + resultadoDivision);
}