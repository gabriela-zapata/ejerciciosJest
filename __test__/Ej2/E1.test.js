//1) Crear una función sin parámetros llamada saludoSimple que devuelva la string "Hola Mundo".
//Verificar que el valor devuelto es "Hola Mundo"

function saludoSimple(){
    return "Hola Mundo"
}


test("Validar que el valor devuelto es Hola mundo", ()=>{
    expect(saludoSimple("Hola Mundo")).toBe(`Hola Mundo`)
})