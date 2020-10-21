/*6) Crear una función llamada parOImpar que tome numero como parámetro y
 devuelva "par" o "impar" según corresponda
Verificar que se ingrese un numero valido
Verificar que devuelva el valor correcto para ambos casos posibles*/
function parOImpar(numero){
    if (typeof numero != "number") {
        throw new Error( "Ingrese un numero");
    }
    if (numero %2==0) {
        return "Es par";
    
    }else 
        return"Es impar";
    
}
test("Si no es un numero", ()=>{
    var llamadaAlaFuncion = ()=>parOImpar("dos");
    var errorEsperado = "Ingrese un numero";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
});
test("Si es par ", ()=>{
    var llamadaAlaFuncion = parOImpar(10);
    var valorEsperado ="Es par";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("Si es impar ", ()=>{
    var llamadaAlaFuncion = parOImpar(9);
    var valorEsperado ="Es impar";
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});