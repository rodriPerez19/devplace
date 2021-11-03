/* NRO-18
de este array ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"]
eliminar los valores repetidos
output => ["lorem", "ipsum", "scammer", "simply", "laboris", "sit", "amet"] */
let array = new Array("lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris")
let array2 = array.filter((item, index) => {
    return array.indexOf(item) === index;
})
console.log(array2);