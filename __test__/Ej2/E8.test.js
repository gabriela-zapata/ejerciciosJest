/*8) Crear una función contarConsonantes que tome como parámetro una palabra y
 devuelva la cantidad de consonantes que tiene
Verificar que la palabra sea un string.
Verificar que la cantidad de letras consonantes devuelta sea correcta.*/
function contarConsonantes(palabra){
    let contador=0;
    if (typeof palabra != "string") {
        throw new Error ("Ingrese una string valida");

}
    for (let i = 0; i < palabra.length; i++) {

        if(palabra[i] !="a"&&palabra[i] != "e"&&palabra[i] != "i"
            &&palabra[i] != "o"&&palabra[i] != "u"&&palabra[i] != " "
            &&palabra[i] != "," &&palabra[i] != ".") {
            contador++;
        }
        
}
        return "la palabra tiene " + contador + " consonantes"

        
}

test("Si no es string", ()=>{
    var llamadaAlaFuncion = ()=>contarConsonantes(2);
    var errorEsperado = "Ingrese una string valida";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})

test("Verificar que la cantidad de consonantes devuelta sea correcta", ()=>{
    var llamadaAlaFuncion = contarConsonantes("Si, quiero muchos caramelos.");
    var valorEsperado = "la palabra tiene 12 consonantes"
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});