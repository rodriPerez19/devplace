// Ejercicio Nº 1
// Matias olvidó el nombre de sus conocidos y otras cosas.
// Dando un string determinado tiene que devolver la relación que tiene
// Ricardo = "Ricardo es tu tio", Roberto = "Roberto es tu hermano", Argentina = "El país al que perteneces"
// Dinamita = "Es tu gato"
// Ejercicio Nº2
// Crear una función que tome como parametro 2 numeros y retorne true si alguno es 100 o si la suma de ambos es 100
// Ejercicio Nº3
// Pasado un string "index.html", "script.js" debe devolver la extension del archivo ej: ".js"
// Ejercicio Nº4
// Crear dos funciones una que convierta los grados Cº a Fº y viceversa
// ºF = (ºC · 1.8) + 32
// ºC = (ºF -32) / 1.8
/* (faren- 32) * 5 / 9;
 * 9 / 5 + 32; */

/*  Ejercicio Nº5
    Crear una función que muestre por consola la fecha y hora con el siguiente formato:
    Hoy es : Miercoles
    Hora actual: 10:34
*/

//---------1
function x() {
    const names = ['Ricardo', 'Roberto', 'Argentina']
    switch (names) {
        case 'Ricardo':
            console.log('Ricardo es tu tio')
            break;
        case 'Roberto':
            console.log('Roberto es tu hermano')
            break;
        case 'Argentina':
            console.log('El pais al que perteneces')
            break;
        default:
            console.log('Game Over')
            break;
    }
}

//----------2
function z(a, b) {
    if (a == 100 || b == 100) {
        console.log('Es 100')
    } else if (a + b == 100) {
        console.log('Es 100')
    } else {
        console.log('Game Over')
    }

}

//----------3

function j() {

}
//-----------4
function celToFah(celsius) {
    let res = celsius * 9 / 5 + 32;
}

function fahToCel(faren) {
    let res = (faren - 32) * 5 / 9;
}
//----------5
function mostrarDia() {
    let date = new Date();
    let dia = new Array(7);
    dia[0] = "Domingo";
    dia[1] = "Lunes";
    dia[2] = "Martes";
    dia[3] = "Miercoles";
    dia[4] = "Jueves";
    dia[5] = "Viernes";
    dia[6] = "Sabado";
    console.log("Hoy es: " + dia[date.getDay()]);
}
mostrarDia();

function mostrarHoraActual() {
    let hoy = new Date();
    let hora = hoy.getHours() + ':' + hoy.getMinutes() + ':' + hoy.getSeconds();
    return console.log(hora);
}
mostrarHoraActual();