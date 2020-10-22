/*14) Crear una función que tome un Array de numeros. Devolver el promedio de los numeros.
Verificar que para el array [-2, 5, 7, 10] devuelva 5
Verificar que para el array [1, 2, "tres", 4] lanza el error "Uno o mas elementos no son numeros validos"*/

function promedio(array){
    var promedio=0;
    var acumulador=0;

    for (let i = 0; i< array.length; i++) {
        acumulador+=array[i]

        if (typeof array[i] != "number") {
            throw new Error ("Ingrese un numero valido");
        }
    }
    promedio=acumulador / array.length;
    return promedio
}

test("devuelve 5", ()=>{
    var llamadaAlaFuncion =  promedio([-2, 5, 7,10]);
    var valorEsperado = 5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("devuelve 5 (bis)", ()=>{
    var llamadaAlaFuncion =  promedio([-2, 5, 7, 10, 5]);
    var valorEsperado = 5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("Uno o mas elementos no son numeros validos", ()=>{
    var llamadaAlaFuncion = ()=>promedio([1, 2, "tres", 4]);
    var errorEsperado = "Ingrese un numero valido"
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
});