class Calculadora {
    constructor(){

    }
    convertirAcm(metros){
        return `${metros} mts son ${metros*100} cm`;
    }
    convertirAmm(metros){
        return `${metros} mts son ${metros*1000} mm`;
    }
    convertirAkm(metros){
        return `${metros} mts son ${metros/1000} km`;
    }
}
const medidaM = new Calculadora();


test("pruebacm",()=>{
    expect(medidaM.convertirAcm(10)).toBe("10 mts son 1000 cm");
})
test("pruebamm",()=>{
    expect(medidaM.convertirAmm(10)).toBe("10 mts son 10000 mm");
})
test("pruebakm",()=>{
    expect(medidaM.convertirAkm(10)).toBe("10 mts son 0.01 km");
})