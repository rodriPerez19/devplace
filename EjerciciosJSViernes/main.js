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
console.log(pasarArray([12, 45, 67]))
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

// Ejercicio Nº6:
// Crear una función que concatene 2 arrays
// Ejercicio Nº7:
//  Crear una función que retorne true si un array contiene un elemento
// Ejercicio Nº8
// Crear una función que te diga si el ultimo caracter de un string es una b
// Ejercicio Nº9
// Crear una función que tome un string y cree uno nuevo utilizando las 3 primeras y ultimas letras,
// comprobar que el string de parametro mida al menos 6 caracteres
// Ejercicio Nº10
// Crear una función que tome dos strings y los concatene sin las primeras 2 letras
// Ejercicio Nº11
// Comprobar entre dos valores cual es mas cercano al 100

//--------------------6
const arr1 = [10, 20, 30];
const arr2 = [40, 50, 60];

function x() {
    return arr1.concat(arr2);
}
console.log(x());

//--------------------7
miFuncion2 = (elemento, array) => array.includes(elemento);

console.log(miFuncion2(10, 'hola 10'))

//--------------------8
function ultimoCaracter(str) {
    return str[str.length - 1] === "b";
}
console.log(ultimoCaracter('abc'))
console.log(ultimoCaracter('acb'))

//--------------------9
//cadena.slice(inicioTrozo[, finTrozo])
function cut(str) {
    if (str.length >= 6) {
        return str.slice(str.length - 3, str.length);
    } else {
        return "No es suficiente";
    }
}
console.log(cut('concatenacion'))

//--------------------10
function concatenarSin(a, b) {
    return a.slice(2).concat(b.slice(2));
}
console.log(concatenarSin('Hola', 'Mundo'))

//--------------------11
function ejem11(num1, num2) {
    let n1 = num1 > 100 ? num1 - 100 : 100 - num1;
    let n2 = num2 > 100 ? num2 - 100 : 100 - num2;
    return n1 > n2 ? num2 : num1;
}
console.log(ejem11(30, 10))