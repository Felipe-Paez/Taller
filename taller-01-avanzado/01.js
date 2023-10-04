const cantidad = 10
const largo = 5
let asteriscos = "*"
const espacio = " "
let linea = asteriscos.repeat(cantidad)

for (i = 0; i < largo; i++) {
    salto()
    console.log(linea)
    salto()
}
salto()
asteriscos = "* "
for (i = 0; i < cantidad; i++) {

    linea = asteriscos.repeat(largo)
    console.log(linea)
}
salto()
asteriscos = "*"
for (i = 0; i < cantidad; i++) {
    linea = espacio.repeat(i)
    console.log(linea + asteriscos)
}
salto()
for (i = cantidad - 1; i >= 0; i--) {
    linea = espacio.repeat(i)
    console.log(linea + asteriscos)
}

function salto(){
    console.log(" ")
}