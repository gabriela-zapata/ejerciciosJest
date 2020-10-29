test("es vocal", ()=>{
    var llamadaAlaFuncion = vocalONo('anana');
    var valorEsperado ="la palabra empieza con vocal" ;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});