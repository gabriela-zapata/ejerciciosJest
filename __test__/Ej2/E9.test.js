/*9) Crear una función que tome 2 numeros. Devolver el mayor de los números.
Verificar que funciona para numeros positivos
Verificar que funciona para numeros negativos
Verificar que tira error cuando se ingresan numeros invalidos*/

function numMayor(a,b){
    if (typeof a != "number"||typeof b != "number") {
        throw new Error ("Ingrese un numero valido");
    }
   
    if(a > b){
        return a
    }else return b
    
    
}
test("numeros positivos", ()=>{
    var llamadaAlaFuncion =  numMayor(5,8);
    var valorEsperado = 8;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMayor(-5, -8)
    var valorEsperado = -5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros invalido", ()=>{
    var llamadaAlaFuncion = ()=>numMayor("cinco", "ocho");
    var errorEsperado = "Ingrese un numero valido"
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})