let base = prompt("Ingresa la base de tu triangulo");
let altura = prompt ("Ahora ingresa la altura");

if(isNaN(base) || isNaN(altura)){
    console.log("los numeros que has ingresado no son validos!");
}
else{
    base = Number( base );
    altura = Number( altura );
    let area = (base * altura) / 2;
    alert("El area de tu triangulo es " + area);
}