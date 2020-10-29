/*14) Crear una función que tome un Array de numeros. Devolver el promedio de los numeros.
Verificar que para el array [-2, 5, 7, 10] devuelva 5
Verificar que para el array [1, 2, "tres", 4] lanza el error "Uno o mas elementos no son numeros validos"*/

function promedio(array){
    
    
    let promedio= array.reduce((acc, sig)=> acc + sig,0)/array.length
    
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
