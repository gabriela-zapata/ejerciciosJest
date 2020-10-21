/*11) Crear una función que tome un Array de numeros. Devolver el mayor
 de los números.
Verificar que funciona para numeros positivos
Verificar que funciona para numeros negativos
Verificar que tira error cuando si uno de los numeros es invalido*/






function numMayor(array){
    var mayorProvisorio=array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
       if (typeof element != "number") {
            throw new Error ("Ingrese un numero valido");
       }
        if(element > mayorProvisorio){
            mayorProvisorio=element;
     
        }
    
    }
    return mayorProvisorio;
}


test("numeros positivos", ()=>{
    var llamadaAlaFuncion =  numMayor([9,3,4]);
    var valorEsperado = 9;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMayor([-5, -8, -10])
    var valorEsperado = -5;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros invalido", ()=>{
    var llamadaAlaFuncion = ()=>numMayor(["cinco", "ocho","nueve"]);
    var errorEsperado = "Ingrese un numero valido"
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
})

test("test variado", ()=>{
    var llamadaAlaFuncion =  numMayor([1,2,3,10,4,2,66,3,1,-100,3,6,3,22,1]);
    var valorEsperado = 66;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});