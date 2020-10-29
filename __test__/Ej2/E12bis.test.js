function numMenor(array){
   
    let mayor=array.reduce((menorProvisorio,element)=>{
        if(element > menorProvisorio){
            menorProvisorio=element;
        }
        return menorProvisorio;
    } , array[0])

return mayor
}
test("numeros positivos", ()=>{
    var llamadaAlaFuncion =  numMenor([9,3,4]);
    var valorEsperado = 9;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMenor([-5, -8, -10])
    var valorEsperado = -5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMenor([])
    var valorEsperado = undefined;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});