/*16) Crear una función que cuente la cantidad de numeros que tiene una string
Agregar test para verificar que cuentaNum('Password1992') devuelva 4
Agregar test para verificar que cuentaNum('Una string 2-5') devuelva 2
Agregar test para verificar que cuentaNum('Sin_numeros') devuelva 0*/
const { esUnNumero, stringAArray } = require("../../../src/utilidades.js")


function cuentaNum (cadena){
   var cantidadNum= stringAArray(cadena).filter(item => esUnNumero(item)).length
   return cantidadNum
   
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
