/* NRO-12
debes quitar el primer elemento de este array ["lorem", "ipsum", "scammer", "simply"]
output => ["ipsum", "scammer", "simply"] */
let array = new Array("lorem", "ipsum", "scammer", "simply");
array.shift([1]);
console.log(array);