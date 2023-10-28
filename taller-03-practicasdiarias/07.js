const precioiva = 15000
const iva = 15


function precio(a,b){
    if(isNaN(b) || b == null){
    return -1
    }
    else{
    let iva = (b/100)*a
    const final = b - iva
    return final.toFixed( 2 )
    }
}

console.log(precio(iva,precioiva))
