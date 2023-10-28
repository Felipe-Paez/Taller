/*// 8. El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que 
determina la cantidad de grasa de una persona.

// El BMI se calcula con la siguiente formula:

// peso / altura^2
// Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular
el BMI e imprimir:

// "Bajo de peso" si el BMI < 18.5
// "Normal" si está entre 18.5 y 24.9
// "Sobrepeso" si está entre 25 y 29.9
// "Obeso" si es igual o mayor a 30 */


const peso = Number(prompt("Digite su peso"))
const altura = Number(prompt("digite su altura"))

const bmi = peso/altura*altura

if(bmi < 18.5){
    alert(" Bajo de peso ")
}
else if(bmi > 18.4 && bmi > 25 ){
    alert("Normal")
}
else if(bmi > 24.9 && bmi < 30){
    alert("Sobrepeso")
}
else if(bmi > 29.9){
    alert("obeso")
}