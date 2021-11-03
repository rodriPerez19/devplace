/* NRO-20
se tiene una variable string llamada reporte="lorem ipsum scammer simply laboris sit amet"
se desea lo siguiente:
1 sustituir todas las letras "a" por "x"
2 mutar las vocales que no sean "a" en mayuscula
3 mutar la primera letra del string en mayuscula
4 cambiar la ultima letra del string por un "@"
5 adicional contar el total de vocales que existe en elstring y mostrar el valor
output => "LOrEm IpsUm scxmmEr sImply lxbOrIs sIt xmE@"
output => total de vocales n // n es un valor numerico que reprensenta el total */
let reporte = "lorem ipsum scammer simply laboris sit amet";
reporte = reporte.replace(/a/g, "x")
    .replace(/e/g, "E")
    .replace(/i/g, "I")
    .replace(/o/g, "O")
    .replace(/u/g, "U");
reporte = reporte.charAt(0).toUpperCase() + reporte.slice(1, -1) + "@";
let vocales = reporte.match(/[aeiou]/gi).length;
console.log(reporte);
console.log(vocales);