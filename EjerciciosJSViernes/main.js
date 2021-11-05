// Ejercicio Nº1:  
// Crear una función que tome los años de una persona y retorne la edad en días
// Ejercicio Nº2:  
// Crear una función que tome horas y las convierta a segundos
// Ejercicio Nº3:
// Crear una función que tome un array y devuelva un solo string de cada elemento separado por espacio.
// Ejercicio Nº4:
// Crear una funcion que tome un array y lo invierta
// Ejercicio Nº5:
// Crear una funcion que tome un array y lo invierta sin cambiar el original.

//--------------------1
function convertirEdad(edad) {
    return edad * 365;
}
console.log(convertirEdad(2))

//--------------------2
function horas(horasPrueba) {
    return horasPrueba * 3600;
}
console.log(horas(2));

//--------------------3
function pasarArray(array) {
    return array.join(" ");
}

//--------------------4
function invertir(array2) {
    return array2.reverse();
}
let array2 = ["hola", "mundo"]
console.log(invertir(array2))

//--------------------5
function invertirArreglo(array3) {
    let arrayCopia = [];
    for (let i = array3.length - 1; i >= 0; i--) {
        arrayCopia.push(array3[i]);

    }
    console.log("ArrayCopia " + arrayCopia)
    console.log("Array3 " + array3);
}
console.log(invertirArreglo([10, 20, 30]));