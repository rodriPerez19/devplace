/* NRO-17
mediante un switch verificar si una persona es mayor de edad,
teniendo en cuenta, que una persona es mayor de edad, cuando la edad es igual o mayor a 21 años
edad = 20
output => true || false */
let edad = 20;
switch (edad >= 21) {
    case true:
        console.log('Es Mayor');
        break;
    case false:
        console.log('Es menor');
        break;
    default:
        console.log('No se reconoce');
}