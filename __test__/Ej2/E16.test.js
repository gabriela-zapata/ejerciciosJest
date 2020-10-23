/*16) Crear una función que cuente la cantidad de numeros que tiene una string
Agregar test para verificar que cuentaNum('Password1992') devuelva 4
Agregar test para verificar que cuentaNum('Una string 2-5') devuelva 2
Agregar test para verificar que cuentaNum('Sin_numeros') devuelva 0*/

function cuentaNum (cadena){
    var contador=0;
    for (let i = 0; i < cadena.length; i++) {
        const caracter = cadena[i];
        if (!isNaN(parseInt(caracter)) ) {
            contador ++
        }
        
    }
    return contador
}

test("devuelva 4", ()=>{
    var llamadaAlaFuncion = cuentaNum('Password1992');
    var valorEsperado = 4;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelva 2", ()=>{
    var llamadaAlaFuncion = cuentaNum('Una string 2-5');
    var valorEsperado = 2;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelva 0", ()=>{
    var llamadaAlaFuncion = cuentaNum('Sin_numeros');
    var valorEsperado = 0;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});