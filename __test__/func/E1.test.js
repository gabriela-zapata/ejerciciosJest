
    const { vocalONo } = require("../../../src/utilidades.js") 

test("es vocal", ()=>{
    var llamadaAlaFuncion = vocalONo('anana');
    var valorEsperado =true ;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});

test("es vocal", ()=>{
    var llamadaAlaFuncion = vocalONo('banana');
    var valorEsperado =false ;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});