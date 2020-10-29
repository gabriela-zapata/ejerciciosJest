const personas=[
    {nombre:"Juan", edad:23,sexo:"masculino",estadocivil:"soltero"},
    {nombre:"Ana", edad:33,sexo:"femenino" ,estadocivil:"casada"},
    {nombre:"Cecilia", edad:25,sexo:"femenino",estadocivil:"soltera"},
    {nombre:"Rosa", edad:45,sexo:"femenino" ,estadocivil:"casado"},
    {nombre:"Jose", edad:50,sexo:"masculino",estadocivil:"soltero"},
    {nombre:"David", edad:32,sexo:"masculino" ,estadocivil:"casado"},
    {nombre:"Claudia", edad:15,sexo:"femenino",estadocivil:"soltera"},
    {nombre:"Bryan", edad:13,sexo:"masculino" ,estadocivil:"soltero"},

]

const david= personas.find(persona=>{

return persona.nombre=== "David"

})
console.log(david)
