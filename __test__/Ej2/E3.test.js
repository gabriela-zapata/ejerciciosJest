//3) Crear una función llamada saludoConEdad que tome 2 parámetros, 
//nombre y edad, y devuelva la string "Hola, {nombre}, según su edad, usted nació aproximadamente en {añoAproximado}"
//Verificar que se ingrese un nombre válido
//Verificar que la edad sea un número válido
//Verificar que devuelva el mensaje correcto para un nombre y edad válidos.
function saludoConEdad(nombre,edad){

    var añoAproximado= 2020-edad

    if (typeof nombre != "string"||nombre =="") {
        throw new Error ("Ingrese un nombre valido");
    }
    if(typeof edad !="number" ){
        throw new Error ("Ingrese un numero")
    }
    return "Hola "+ nombre+" Usted nacio aproximadamente en el año "+añoAproximado

}



test("Si no es string", ()=>{
    var llamadaAlaFuncion = ()=>saludoConEdad(525,5);
    var errorEsperado = "Ingrese un nombre valido";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})
test("Si es string vacia", ()=>{
    var llamadaAlaFuncion = ()=>saludoConEdad("",5);
    var errorEsperado = "Ingrese un nombre valido";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})
test("Si no es un numero", ()=>{
    var llamadaAlaFuncion = ()=>saludoConEdad("Jose","5");
    var errorEsperado = "Ingrese un numero";
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})
test("Si es valido devolver mensaje", ()=>{
var llamadaAlaFuncion = saludoConEdad("Jose", 5);
var valorEsperado = "Hola Jose Usted nacio aproximadamente en el año 2015"
expect(llamadaAlaFuncion).toBe(valorEsperado);

})