/*13) Crear una función que tome un Array de numeros. Devolver la suma de 
los numeros.
Verificar que para el array [-2, 5, 7, 10] devuelva 20
Verificar que para el array [1, 2, "tres", 4] lanza el error 
"Uno o mas elementos no son numeros validos"*/





function sumaDeNumeros(array){
     var suma=0;
    
    for (let i = 0; i < array.length; i++) {
        suma += array[i];

        
        if (typeof array[i] != "number") {
            throw new Error ("Ingrese un numero valido");
        
        }
    
    }
    return suma;

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