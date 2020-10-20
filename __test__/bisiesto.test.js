
/*1.a) Validar 2000 es bisiesto
1.b) Validar 2400 es bisiesto
1.c) Validar 1900 no es bisiesto
1.d) Validar 2200 no es bisiesto
1.e) Validar 2300 no es bisiesto
1.f) Validar 2011 no es bisiesto
1.g) Validar que "dos mil" devuelve "No es un año valido"*/


const esAñoBisiesto = require("../../src/bisiesto.js")

describe("pruebas para año bisiesto",()=>{
    test("Validar que si se ingresa un string", ()=>{
        expect(()=>esAñoBisiesto("s")).toThrow("Ingrese un numero")
    })
    test("Validar 2000 es bisiesto", ()=>{
        expect(esAñoBisiesto(2000)).toBe(`El año 2000 es Bisiesto`)
    })
    test("Validar 2400 es bisiesto", ()=>{
        expect(esAñoBisiesto(2400)).toBe(`El año 2400 es Bisiesto`)
    })
    test("Validar 1900 no es bisiesto", ()=>{
        expect(esAñoBisiesto(1900)).toBe(`El año 1900 NO es Bisiesto`)
    })
    test("Validar 2200 no es bisiesto", ()=>{
        expect(esAñoBisiesto(2200)).toBe(`El año 2200 NO es Bisiesto`)
    })
    test("Validar 2300 no es bisiesto", ()=>{
        expect(esAñoBisiesto(2300)).toBe(`El año 2300 NO es Bisiesto`)
    })
    test("Validar 2011 no es bisiesto", ()=>{
        expect(esAñoBisiesto(2011)).toBe(`El año 2011 NO es Bisiesto`)
    })
    test("Validar que dos mil devuelve No es un año valido", ()=>{
        expect(()=>esAñoBisiesto("dos mil")).toThrow(`Ingrese un numero`)
    })
})