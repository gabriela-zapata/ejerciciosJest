/*17) Crear una función similar pero que sume los numeros dentro de la string
Agregar test para verificar que cuentaNum('Password1992') devuelva 21
Agregar test para verificar que cuentaNum('Una string 2-5') devuelva 7
Agregar test para verificar que cuentaNum('Sin_numeros') devuelva 0 */

function cuentaNum (cadena){
    var acumulador=0;
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];

        if (!isNaN(parseInt(caracter)) ) {
            acumulador +=parseInt(caracter)
        }
    }
    return acumulador

}

test("Devuelve 21", ()=>{
    var llamadaAlaFuncion = cuentaNum("Password1992");
    var valorEsperado = 21;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("Devuelve 7", ()=>{
    var llamadaAlaFuncion = cuentaNum("Una string 2-5");
    var valorEsperado = 7;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("Devuelve 0", ()=>{
    var llamadaAlaFuncion = cuentaNum('Sin_numeros');
    var valorEsperado = 0;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});