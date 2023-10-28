function suma(...numero) {
    let suma = 0;
       for (let i = 0; i < numero.length; i++) {
        const sumando = numero[i]
         suma = suma + sumando
       }
    
        return suma
    
}

console.log(suma(1,2,3,4,5,6,7,8,9,10))