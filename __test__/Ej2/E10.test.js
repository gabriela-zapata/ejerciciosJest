/*10) Crear una función que tome 3 numeros. Devolver el mayor de los números.
Verificar que funciona para numeros positivos
Verificar que funciona para numeros negativos
Verificar que tira error cuando se ingresan numeros invalidos*/
function numMayor(a,b,c){
    if (typeof a != "number"||typeof b != "number"||typeof c != "number") {
        throw new Error ("Ingrese un numero valido");
    }
   
    if(a > b && a > c){
        return a
    }else if (b > a && b > c){
        return b
    }else return c
    
    
    
}
test("numeros positivos", ()=>{
    var llamadaAlaFuncion =  numMayor(9,3,4);
    var valorEsperado = 9;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMayor(-5, -8, -10)
    var valorEsperado = -5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros invalido", ()=>{
    var llamadaAlaFuncion = ()=>numMayor("cinco", "ocho","nueve");
    var errorEsperado = "Ingrese un numero valido"
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})