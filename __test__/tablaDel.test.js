const tablaDel = require("../../src/tabla.js")

describe("pruebas para tabblas",()=>{
    test("Validar que si se ingresa un string", ()=>{
        expect(()=>tablaDel("s")).toThrow("Ingrese un numero")
    })
    test("Validar que devuelve 10 numeros", ()=>{
        
        expect(tablaDel(5).length).toBe(10)
    }) 
    test("Validar que el primer numero devuelto es el mismo que se ingreso", ()=>{
        expect(tablaDel(5)[0]).toBe(5)
    }) 
    test("Validar que el ultimo numero es 10 veces el numero ingresado por parametro", ()=>{
        expect(tablaDel(5)[9]).toBe(50)
    }) 
    test('Validar que si se ingresa un numero menor o igual a 0, devuelve "Ingrese un numero mayor a 0', ()=>{
        expect(()=>tablaDel(0)).toThrow("Ingrese un numero mayor a 0")
    }) 
    test('Validar que si se ingresa un numero mayor a 9, devuelve "Ingrese un numero menor o igual a nueve"', ()=>{
        expect(()=>tablaDel(10)).toThrow("Ingrese un numero menor o igual a 9")
    }) 
})
