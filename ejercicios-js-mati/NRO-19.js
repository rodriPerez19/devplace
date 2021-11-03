/* NRO-19
verificar el tamaño de cada elemento del
array ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"]
output => [n, n, n, n, n, n, n] //n representa un valor numerico */
let array = new Array("lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet");
for (element of array) {
    console.log(element.length);
}