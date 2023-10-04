const cantidad = 10
const asteriscos = "*"
const espacio = " "
let espLinea = null
let linea = null

for (i = 0; i < cantidad; i++) {
    linea = asteriscos.repeat(i)
    console.log(linea)
}
salto()
for (i = cantidad - 1; i >= 0; i--) {
    linea = asteriscos.repeat(i)
    console.log(linea)
}
for (i = 0; i < cantidad; i++) {
    espLinea = espacio.repeat(i)
    linea = asteriscos.repeat(cantidad - i)
    console.log(espLinea + linea)
}
salto()
for (i = cantidad - 1; i >= 0; i--) {
    espLinea = espacio.repeat(i)
    linea = asteriscos.repeat(cantidad - i)
    console.log(espLinea + linea)
}

function salto() {
    console.log(" ")
}