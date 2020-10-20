const { TestScheduler } = require("jest")

function mostrarNum(){
    var resultado = [];
    for (let i = 1; i<=100; i++) {
        resultado.push(i);
    }
    return resultado
}

test("prueba",()=>{
    const resultado = mostrarNum()
    console.log(resultado)
})


/*validas primer elemento 1
validar ultimo elemento 100
validar cantidad de elementos 100*/


test("Validar primer elemento 1", ()=>{
    expect(mostrarNum()[0]).toBe(1)
})

test("Validar ultimo elemento 100", ()=>{
    expect(mostrarNum()[99]).toBe(100)
})

test("Validar cantidad de elementos es 100", ()=>{
    expect(mostrarNum().length).toBe(100)
})