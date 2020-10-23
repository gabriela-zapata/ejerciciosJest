/*18) Crear una función similar pero que concatene todos los numeros y 
los devuelva en un string
Agregar test para verificar que cuentaNum('Password1992') devuelva "1992"
Agregar test para verificar que cuentaNum('Una string 2-5') devuelva "25"
Agregar test para verificar que cuentaNum('Sin_numeros') devuelva ""*/

function cuentaNum(cadena){
var acumulador=""
    for (let i = 0; i< cadena.length; i++) {
      const caracter = cadena[i];
      if (!isNaN(parseInt(caracter)) ) {
        acumulador+=caracter
    }
    }
return acumulador
}

test("devuelva 1992", ()=>{
    var llamadaAlaFuncion = cuentaNum("Password1992");
    var valorEsperado = "1992";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelva 25", ()=>{
    var llamadaAlaFuncion = cuentaNum("Una string 2-5");
    var valorEsperado ="25";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelva ''", ()=>{
    var llamadaAlaFuncion = cuentaNum('Sin_numeros');
    var valorEsperado = '';
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});