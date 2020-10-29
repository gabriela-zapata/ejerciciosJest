const { vocalONo } = require("../../../src/utilidades.js") 

function miArray(array){

  return array.some(vocalONo )
    
}
test("una palabra empieza con vocal", ()=>{
    var llamadaAlaFuncion = miArray(["anana","manzana"]);
    var valorEsperado =true ;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("una palabra empieza con vocal", ()=>{
    var llamadaAlaFuncion = miArray(["banana","manzana"]);
    var valorEsperado =false ;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});