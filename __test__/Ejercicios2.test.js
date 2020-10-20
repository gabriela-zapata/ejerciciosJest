function tablaDel7(){
        const resultado = []
    for (let i = 1; i <=10; i++) {
        resultado.push(i * 7);
        
    }
    return resultado
}
test("prueba",()=>{
    const resultado = tablaDel7()
    console.log(resultado)
})

/*validas primer elemento 7
validar ultimo elemento 70
validar cantidad de elementos 10*/

test("Validar primer elemento 7", ()=>{
    expect(tablaDel7()[0]).toBe(7)
})

test("Validar ultimo elemento 70", ()=>{
    expect(tablaDel7()[9]).toBe(70)
})

test("Validar cantidad de elementos es 10", ()=>{
    expect(tablaDel7().length).toBe(10)
})