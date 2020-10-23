/*20) Crear una función que tome un array de temperaturas en grados 
centígrados, los convierta a Fahrenheit y devuelva los resultados. 
Buscar fórmula de conversión en google.
Verificar un caso con 4 valores positivos
Verificar un caso con 4 valores negativos
Verificar un caso con 4 valores mixtos*/

/*function conversion(temperaturas){
    var nuevasTemp=[];
    for (let i = 0; i < temperaturas.length; i++) {
        const temp =temperaturas[i];
        nuevasTemp.push((temp*9/5)+32)
    }
    return nuevasTemp
}*/
function conversion(temperaturas){

return temperaturas.map(temp=>(temp*9/5)+32)

}

function esVocal(letra) {
    return letra == "a"||letra == "e"||letra == "i"||letra == "o"||letra == "u";
}

function cuentaVocales(letras) {
    return letras.split("").filter(letra => esVocal(letra)).length;
}
function cuentaConsonantes(letras) {
    return letras.split("").filter(letra => !esVocal(letra)).length;
}

test("4 valores positivos", ()=>{
    var llamadaAlaFuncion = conversion([10, 12, 42, 21]);
    var valorEsperado = [50, 53.6, 107.6, 69.8];
    expect(llamadaAlaFuncion).toEqual(valorEsperado);
});
test("4 valores negativos", ()=>{
    var llamadaAlaFuncion = conversion([-10, -12, -42, -21]);
    var valorEsperado = [14, 10.399999999999999, -43.599999999999994, -5.799999999999997];
    expect(llamadaAlaFuncion).toEqual(valorEsperado);
});
test("4 valores mixtos", ()=>{
    var llamadaAlaFuncion = conversion([10, 12, -42, -21]);
    var valorEsperado = [50, 53.6, -43.599999999999994, -5.799999999999997];
    expect(llamadaAlaFuncion).toEqual(valorEsperado);
});
test("4 valores mixtos", ()=>{
    var llamadaAlaFuncion = cuentaVocales("caramelos");
    var valorEsperado = 4;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("4 valores mixtos", ()=>{
    var llamadaAlaFuncion = cuentaConsonantes("caramelos");
    var valorEsperado = 5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});