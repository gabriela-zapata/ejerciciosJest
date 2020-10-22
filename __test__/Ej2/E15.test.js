/*15) Crear una función que tome un Array de numeros ya ordenados de menor
 a mayor. Devolver la mediana de los numeros. La mediana es el valor del 
 medio de una lista de numeros ordenados. Si la cantidad de elementos es par, 
 tomar los 2 numeros del medio y devolver el promedio de ambos. 
 Mas info: https://www.disfrutalasmatematicas.com/datos/mediana.html
Verificar que para el array [-2, 5, 7, 10, 20] devuelva 7. (7 es el del medio)
Verificar que para el array [-2, 5, 7, 10] devuelva 6. (5 y 7 son los del medio, 
    ya que la cantidad de numeros es par. El promedio entre ambos da 6)
Verificar que para el array [1, 2, "tres", 4] lanza el error "Uno o mas elementos
 no son numeros validos"
 
       [-2, 5, 7, 10, 20] 5 elementos
    [1, -2, 5, 7, 10, 20, 1] 7 elementos
 [2, 1, -2, 5, 7, 10, 20, 1, 2] 9 elementos
 
 5 -> 2
 7 -> 3
 9 -> 4

 if (array.length % 2 != 0)

    var medio = array[parseInt(array.length / 2)]
    var mediana = medio;




       [-2, 5, 7, 10] 4 elementos
    [1, -2, 5, 7, 10, 20] 6 elementos
 [2, 1, -2, 5, 7, 10, 20, 1] 8 elementos
 
 4 -> 1 y 2
 6 -> 2 y 3
 8 -> 3 y 4

 
 else (del if de arriba)
 

    var medioA = array[array.length / 2 - 1]
    var medioB = array[array.length / 2]
    var mediana = (medioA + medioB) / 2
 */
 
function mediana(array){
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (typeof element != "number") {
            throw new Error("Uno o mas elementos no son numeros validos");
        }
    }
    if (array.length % 2 != 0) {
        // Si la cantidad es impar
        var medio = array[parseInt(array.length / 2)]
        var mediana = medio;
        return mediana;
    } else {
        // Si es par
        var medioA = array[array.length / 2 - 1]
        var medioB = array[array.length / 2]
        var mediana = (medioA + medioB) / 2
        return mediana;
    }
}
/*

 (5 y 7 son los del medio, 
    ya que la cantidad de numeros es par. El promedio entre ambos da 6)
Verificar que para el array [1, 2, "tres", 4] lanza el error "Uno o mas elementos
*/
test("Verificar que para el array [-2, 5, 7, 10, 20] devuelva 7. (7 es el del medio)", ()=>{
    expect(mediana([-2, 5, 7, 10, 20])).toBe(7);
})
test("Verificar que para el array [-2, 5, 7, 10] devuelva 6.", ()=>{
    expect(mediana([-2, 5, 7, 10])).toBe(6);
})
test('Verificar que para el array [1, 2, "tres", 4] lanza el error "Uno o mas elementos no son numeros validos', ()=>{
    expect(()=>mediana([1, 2, "tres", 4])).toThrow("Uno o mas elementos no son numeros validos");
})