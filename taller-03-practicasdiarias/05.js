const lista = []
const listaN = []

for (let i = 0; i < 4; i++) {
    const number = Number(prompt("0/1"))
    lista.push(number)
}

for (let i = 0; i < lista.length; i++) {
    let numero = 0
    if(lista[i] == 1){
      numero = 1*2**[i]
    }
    listaN.push(numero)
}

let entero = listaN.reduce(function (acumulador, elemento) {
        return acumulador + elemento;
    })

console.log(lista)

console.log(entero)

