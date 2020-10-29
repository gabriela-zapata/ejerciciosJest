/*17) Crear una función similar pero que sume los numeros dentro de la string
Agregar test para verificar que cuentaNum('Password1992') devuelva 21
Agregar test para verificar que cuentaNum('Una string 2-5') devuelva 7
Agregar test para verificar que cuentaNum('Sin_numeros') devuelva 0 */
const { esUnNumero, stringAArray } = require("../../../src/utilidades.js")

function cuentaNum (cadena){
    var cantidadNum= stringAArray(cadena).filter(item => esUnNumero(item))
    .reduce((acc, item)=> acc + parseInt(item),0)
    return cantidadNum
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