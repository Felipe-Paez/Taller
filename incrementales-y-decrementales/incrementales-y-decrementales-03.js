let name = prompt("ingresa tu nombre");
let genero = prompt("ingresa tu genero M/F");
let cover = 7;

genero = genero.toUpperCase();

if(genero == "M"){
    cover = cover + 2;
    alert(name + " tu entrada a la disco cuesta $" + cover);
}
else if( genero == "F"){
    cover = cover - 2;
    alert(name + " tu entrada a la disco cuesta $" + cover);
}
else{
    alert(name + " Porfavor ingrese una respuesta valida (M/F)");
}
