/*validar 2x3=6
validar 4x4=16
validar numero negativo tira error
validar si ingresa string debe ingresar numero
validar que 0 tira error*/



function superficie(a,b){
    if (a<0||b<0){
        throw new Error( "Ingrese un numero positivo");
           
    }
    if (typeof a != "number"||typeof b != "number") {
        throw new Error( "Ingrese un numero")
    }

    if (a==0||b==0){
        throw new Error( "Ingrese un numero mayor a 0");
           
    }
return a*b

}
test("prueba",()=>{
    const resultado = superficie(2,3)
    console.log(resultado)
})

test("validar 2x3=6",()=>{
   expect(superficie(2,3)).toBe(2*3)
})

test("validar 4x4=16",()=>{
    expect(superficie(4,4)).toBe(4*4)
 })
 
 test("validar numero negativo tira error",()=>{
    expect(()=>superficie(-10,5)).toThrow("Ingrese un numero positivo")
    expect(()=>superficie(5,-5)).toThrow("Ingrese un numero positivo")
    expect(()=>superficie(-10,-5)).toThrow("Ingrese un numero positivo")

 })

 test("validar si ingresa string debe ingresar numero",()=>{
    expect(()=>superficie("a","b")).toThrow("Ingrese un numero")
 })

 test("validar que 0 tira error",()=>{
    expect(()=>superficie(0,1)).toThrow("Ingrese un numero mayor a 0")
    expect(()=>superficie(9,0)).toThrow("Ingrese un numero mayor a 0")
    expect(()=>superficie(0,0)).toThrow("Ingrese un numero mayor a 0")
 })

