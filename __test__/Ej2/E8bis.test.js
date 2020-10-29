function contarConsonantes(palabra){
    
    if (typeof palabra != "string") {
        throw new Error ("Ingrese una string valida");

}
    let contador=palabra.split("").filter( letra=>letra !="a"&&letra != "e"&&letra != "i"
    &&letra != "o"&&letra != "u"&&letra != " "
    &&letra != "," &&letra != "." ).length;
        return "la palabra tiene " + contador + " consonantes"

}       


test("Si no es string", ()=>{
    var llamadaAlaFuncion = ()=>contarConsonantes(2);
    var errorEsperado = "Ingrese una string valida";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})

test("Verificar que la cantidad de consonantes devuelta sea correcta", ()=>{
    var llamadaAlaFuncion = contarConsonantes("Si, quiero muchos caramelos")
    var valorEsperado = "la palabra tiene 12 consonantes"
    expect(llamadaAlaFuncion).toBe(valorEsperado);


    })