/*13) Crear una función que tome un Array de numeros. Devolver la suma de 
los numeros.
Verificar que para el array [-2, 5, 7, 10] devuelva 20
Verificar que para el array [1, 2, "tres", 4] lanza el error 
"Uno o mas elementos no son numeros validos"*/

function sumaDeNumeros(array){
     
     

        let sumaTotal= array.reduce((acc, sig)=> acc + sig,0)


    return sumaTotal

}

test("devuelve 20", ()=>{
    var llamadaAlaFuncion =  sumaDeNumeros([-2, 5, 7,10]);
    var valorEsperado = 20;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});

test("Uno o mas elementos no son numeros validos", ()=>{
    var llamadaAlaFuncion = ()=>sumaDeNumeros([1, 2, "tres", 4]);
    var errorEsperado = "Ingrese un numero valido"
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
});