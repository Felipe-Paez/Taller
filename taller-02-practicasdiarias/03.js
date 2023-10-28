const values = [
    { name: 'Juan', age: 45, gender: 'male' },
    { name: 'Sofia', age: 13, gender: 'female' },
    { name: 'Sofia', age: 67, gender: 'female' },
    { name: 'Carlos', age: 32, gender: 'female' },
    { name: 'Ana Maria', age: 27, gender: 'female' },
    { name: 'Luisa', age: 5, gender: 'female' },
    { name: 'Elisa', age: 17, gender: 'female' }
]

let mujeres = 0
let hombres = 0

for (let i = 0; i < values.length; i++) {
    if (values[i].gender === 'male') {
        hombres++
    }
    else {
        mujeres++
    }
}

console.log("Hay " + mujeres + " mujeres y " + hombres + " hombres")

const edadMuj = []
const edadHom = []

for (let i = 0; i < values.length; i++) {
    if (values[i].gender == 'male') {
        edadHom.push(values[i].age)
    }
    else {
        edadMuj.push(values[i].age)
    }
}

console.log(edadHom)
console.log(edadMuj)

function suma(a) {
    let suma = a.reduce(function (acumulador, elemento) {
        return acumulador + elemento;
    })
    return suma
}

let sumah = suma(edadHom)
let sumam = suma(edadMuj)

function calcularPromedio(a, suma) {
    let largo = a.length
    return suma / largo
}

console.log("el promedio de edad de hombres es " + calcularPromedio(edadHom, sumah) + " y de mujeres  es " + calcularPromedio(edadMuj, sumam))


const listaRep = []

for (let i = 0; i < values.length; i++) {
    let indice = null
    let temp = values[i].name
    for (let i = 0; i < values.length; i++) {
        if (values[i].name == temp) {
         listaRep.push(temp)
        }
    }
    indice = listaRep.indexOf(temp)
    listaRep.splice(indice,1)
}

console.log(listaRep)