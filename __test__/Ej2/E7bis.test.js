/*7) Crear una función contarVocales que tome como parámetro una palabra  
y devuelva la cantidad de vocales que tiene
Verificar que la palabra sea un string.
Verificar que la cantidad de letras vocales devuelta sea correcta*/

function contarVocales(palabra){
    if (typeof palabra != "string") {
        throw new Error ("Ingrese una string valida");
    }
    var  cantidadDeVocales= palabra.split("").filter(item => item == "a"||item == "e"||item == "i"||item == "o"||item == "u").length
    return `la palabra tiene ${cantidadDeVocales} vocales`
}


        
test("Si no es string", ()=>{
    var llamadaAlaFuncion = ()=>contarVocales(2);
    var errorEsperado = "Ingrese una string valida";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})

test("Verificar que la cantidad de letras a devuelta sea correcta", ()=>{
    var llamadaAlaFuncion = contarVocales("Quiero muchos caramelos");
    var valorEsperado = "la palabra tiene 10 vocales"
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});