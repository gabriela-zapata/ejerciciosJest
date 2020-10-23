/*Crear una función similar que remueva los numeros y devuelva solo el resto 
de la string
Agregar test para verificar que cuentaNum('Password1992') devuelva "Password"
Agregar test para verificar que cuentaNum('Una string 2-5') devuelva 
"Una string -"
Agregar test para verificar que cuentaNum('Sin_numeros') devuelva "Sin_numeros"*/

function cuentaNum(cadena){
    var acumulador=""
    for (let i = 0; i< cadena.length; i++) {
      const caracter = cadena[i];
      if (isNaN(parseInt(caracter)) ) {
        acumulador+=caracter
    }
    }
return acumulador
}
test("devuelva Password", ()=>{
    var llamadaAlaFuncion = cuentaNum("Password1992");
    var valorEsperado = "Password";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelva Una string -", ()=>{
    var llamadaAlaFuncion = cuentaNum("Una string 2-5");
    var valorEsperado ="Una string -";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelva Sin_numeros", ()=>{
    var llamadaAlaFuncion = cuentaNum('Sin_numeros');
    var valorEsperado = "Sin_numeros";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
