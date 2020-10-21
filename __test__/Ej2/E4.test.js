/*4) Crear una función llamada contarCaracteres que tome como parámetro palabra,
 y devuelva la cantidad de caracteres que tiene
Verificar que la palabra sea un string.
Verificar que la cantidad devuelta sea correcta.*/

function contarCaracteres(palabra){
    if (typeof palabra != "string") {
        throw new Error ("Ingrese una palabra valida");
    }
    return palabra.length 
}

test("Si no es string", ()=>{
    var llamadaAlaFuncion = ()=>contarCaracteres(2);
    var errorEsperado = "Ingrese una palabra valida";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})
test("Si la cantidad devuelta  es correcta", ()=>{
    var llamadaAlaFuncion = contarCaracteres("casa");
    var valorEsperado = 4;
    expect(llamadaAlaFuncion).toBe(valorEsperado);

})