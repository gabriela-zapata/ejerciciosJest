/*5) Crear una función llamada contarLetrasA que tome como parámetro 
palabra y devuelva la cantidad de letras "a" que tiene
Verificar que la palabra sea un string.
Verificar que la cantidad de letras "a" devuelta sea correcta.*/

function contarLetrasA(palabra){
    let contador=0;
    if (typeof palabra != "string") {
        throw new Error ("Ingrese una string valida");

}
    for (let i = 0; i < palabra.length; i++) {

        if(palabra[i] == "a") {
            contador++;
        }
        
}
        return "la palabra tiene " + contador + " letras a"

        
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