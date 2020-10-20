/*2) Crear una función llamada saludo que tome como parámetro nombre (string) 
y devuelva "Hola, {nombre}. Bienvenido!"
-Si se ingresa un nombre que no es un string o es un string vacío, 
lanzar un error "Ingrese un nombre valido". Verificar con un test 
para ambos casos posibles.
-Verificar que devuelva el mensaje correcto para un nombre válido.*/


function saludo (nombre){
   
    if (typeof nombre != "string"|| nombre == "") {
        throw new Error ("Ingrese un nombre valido");
        
    }
    
    return "Hola "+ nombre+ " Bienvenido!"
}   





test("Si no es string", ()=>{
    expect(()=>saludo(9)).toThrow("Ingrese un nombre valido")
})
test("Si  es string vacia", ()=>{
    expect(()=>saludo("")).toThrow("Ingrese un nombre valido")
})

test("Si  es string ", ()=>{
    expect(saludo("Juan")).toBe("Hola Juan Bienvenido!")
})