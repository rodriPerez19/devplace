/* NRO-14
buscar en este array ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet", "laboris"]
cuales elementos tienen el valor de "laboris" y convertirlos a mayuscula
output => ["lorem", "ipsum", "scammer", "simply", "LABORIS", "sit", "amet", "LABORIS"] */
let array = ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"];
array.forEach((element, index) => {
    if (element == "laboris") {
        array[index] = array[index].toUpperCase()
    }
});
console.log(array)