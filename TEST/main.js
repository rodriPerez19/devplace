/* typeof es un operador JavaScript que al ser llamado sobre una variable, 
devuelve el tipo de dato que dicha variable contiene. 
Entre otras cosas, podemos utilizarlo para validar de parámetros de 
una función o para comprobar si una variable ha sido definida */

//Tipo string
let nombre = 'juancito'
console.log(nombre);

nombre = 10;

console.log(typeof nombre);

//Tipo Number
let numero = 1000;
console.log(typeof numero);

//Tipo Object
let objecto = {
    nombre: 'Pepito',
    apellido: 'Perez',
    telefono: '2235100400'
}
console.log(typeof objecto);


//Tipo Console Log
console.log(typeof console.log('hola mundo'));
console.log(typeof console.log)

//Tipo Boolean
let x = true;
console.log(typeof x)

//Tipo de Funcion
function miFuncion() {
    return ("Hola Mundo")
}

console.log(typeof typeof typeof miFuncion());

//Tipo null
let i = null;
console.log(i)
console.log(typeof i)
i = 10.5;
console.log(i)
console.log(typeof i)

//Tipo Symbol
let simbolo = Symbol("un simbolo");

//Tipo Class
class Persona {
    constructor(nombre, apellido) {
        this._nombre = nombre;
        this._apellido = apellido;
    }
    get nombre() {
        return this._nombre;
    }
    set nombre(nombre) {
        return this._nombre = nombre;
    }
    get apellido() {
        return this._apellido;
    }
    set apellido(apellido) {
        this._apellido = apellido;
    }
    toString() {
        return `${this._nombre}
                ${this._apellido}`;
    }
}
let persona1 = new Persona('Juan', 'Perez');
console.log(persona1.toString());



Function concaternarArray1(array1, array2) = {
    let aux = [ ];
    for (i = 0; i < array1.length && array2.length; i++) {
        aux.push(array1[i]);
        aux.push(array2[i]);
    }
    return console.log(aux);
}