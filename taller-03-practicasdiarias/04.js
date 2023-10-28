let products = [
    { nombre: "Pan", precio: 3, cantidad: 20 },
    { nombre: "Tomate", precio: 8, cantidad: 7 },
    { nombre: "Leche", precio: 0, cantidad: 4 },
    { nombre: "Huevos", precio: 9, cantidad: 0 },
    { nombre: "Arroz", precio: 5, cantidad: 5 },
    { nombre: "Cebolla", precio: 0, cantidad: 10 },
    { nombre: "Naranjas", precio: 12, cantidad: 10 },
];

let cheapProducts = []
let productos = []
let valortotal = []

for (let i = 0; i < products.length; i++) {
    //productos baratos
      if(products[i].precio > 0  && products[i].precio <= 5 ){
       cheapProducts.push(products[i].nombre)
      }
    //productos mayor a 0
      if(products[i].precio == 0 || products[i].cantidad == 0){
      }
      else{
        productos.push(products[i].precio)
      }
    //costo total
      let valor = null
      if(products[i].precio == 0 || products[i].cantidad == 0){
      }
      else{
        valor = products[i].precio * products[i].cantidad
      }
      valortotal.push(valor)
}

function suma(a) {
    let suma = a.reduce(function (acumulador, elemento) {
        return acumulador + elemento;
    })
    return suma
}

function calcularPromedio(a, suma) {
    let largo = a.length
    return suma / largo
}

//productos baratos
console.log(cheapProducts)

//productos mayor a 0
let sumap = suma(productos)
console.log("el promedio de los productos con cantidad o precio mayor a 0 es " + calcularPromedio(productos,sumap))

//costo total
let costo = suma(valortotal)
console.log("el costo total del inventario es " + costo)