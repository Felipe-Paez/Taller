alert("Hola, Te hemos llamado para adentrarte a un castillo, pero antes tenemos que avisarte que hay 2 dragones protegiendo el castillo, los cuales debes deshacerte de ellos, elige cuantas balas deseas llevar en tu aventura ")
const balas = Number(prompt("Elige la cantidad de balas que llevaras con numeros del 1 a el 9"))

if(isNaN(balas) || balas > 1){
    alert("Ingresa la cantidad correcta de balas")
} 
else{
   if(balas >= 4){
    alert("Felicidades te has aventurado en el castillo y haz podido deshacerte de los dragones!")
   }
   else{
    alert("Te aventuras en el castillo con " + balas+ " pero resulta que no es suficiente, necesitabas 2 balas para matar a cada dragon, haz fallado la mision y haz tenido que retirarte")
   }
}