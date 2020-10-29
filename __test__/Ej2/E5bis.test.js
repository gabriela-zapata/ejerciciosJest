/*5) Crear una función llamada contarLetrasA que tome como parámetro palabra y devuelva la cantidad de letras "a" que tiene
Verificar que la palabra sea un string.
Verificar que la cantidad de letras "a" devuelta sea correcta.
22) Resolver los ejercicios 5, 7, 8 y 16 combinando array.filter y array.length*/

function contarLetrasA(palabra){
    if (typeof palabra != "string") {
        throw new Error ("Ingrese una string valida");
    }
    var  cantidadDeA= palabra.split("").filter(item => item === "a").length
    return `la palabra tiene ${cantidadDeA} letras a`
}


        
test("Si no es string", ()=>{
    var llamadaAlaFuncion = ()=>contarLetrasA(2);
    var errorEsperado = "Ingrese una string valida";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})


test("Verificar que la cantidad de letras a devuelta sea correcta", ()=>{
    var llamadaAlaFuncion = contarLetrasA("caramelos");
    var valorEsperado = "la palabra tiene 2 letras a"
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});