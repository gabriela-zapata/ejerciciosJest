/*12) Crear una función que tome un Array de numeros. 
Devolver el menor de los números.
Verificar que funciona para numeros positivos
Verificar que funciona para numeros negativos
Verificar que tira error cuando si uno de los numeros es invalido*/

function numMenor(array){
    var menorProvisorio=array[0];

    for (let i = 0; i < array.length; i++) {
        const element = array[i];
       if (typeof element != "number") {
            throw new Error ("Ingrese un numero valido");
       }
        if(element < menorProvisorio){
            menorProvisorio=element;
     
        }
    
    }
    return menorProvisorio;
}
test("numeros positivos", ()=>{
    var llamadaAlaFuncion =  numMenor([9,3,4]);
    var valorEsperado = 3;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros negativo", ()=>{
    var llamadaAlaFuncion = numMenor([-5, -8, -10])
    var valorEsperado = -10;
    expect(llamadaAlaFuncion).toBe(valorEsperado);
});
test("numeros invalido", ()=>{
    var llamadaAlaFuncion = ()=>numMenor(["cinco", "ocho","nueve"]);
    var errorEsperado = "Ingrese un numero valido"
    expect(llamadaAlaFuncion).toThrow(errorEsperado);
});
