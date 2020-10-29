/*11) Crear una función que tome un Array de numeros. Devolver el mayor
 de los números.
Verificar que funciona para numeros positivos
Verificar que funciona para numeros negativos
Verificar que tira error cuando si uno de los numeros es invalido*/

function numMayor(array){
   
    let mayor=array.reduce((mayorProvisorio,element)=>{
        if(element > mayorProvisorio){
            mayorProvisorio=element;
        }
        return mayorProvisorio;
    } , array[0])

return mayor
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
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMayor([])
    var valorEsperado = undefined;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});