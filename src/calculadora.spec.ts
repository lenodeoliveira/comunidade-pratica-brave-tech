import { Calculadora } from '@/calculadora'

describe('Calculadora', () => {
  test('Deve chamar o método somar com os valores corretos', () => {
    const calculadora = new Calculadora()
    const somaSpy = jest.spyOn(calculadora, 'somar')
    calculadora.somar(2,2)
    expect(somaSpy).toHaveBeenCalledWith(2,2)
  })

  test('Deve somar os valores e devolver o resultado correto', () => {
    const calculadora = new Calculadora()
    const resultado = calculadora.somar(2,2)
    expect(resultado).toBe(4)
  })

  test('Deve chamar o método dividir com os valores corretos', () => {
    const calculadora = new Calculadora()
    const dividirSpy = jest.spyOn(calculadora, 'dividir')
    calculadora.dividir(10,2)
    expect(dividirSpy).toHaveBeenCalledWith(10,2)
  })

  test('Deve dividir os valores e devolver o resultado correto', () => {
    const calculadora = new Calculadora()
    const resultado = calculadora.dividir(10,2)
    expect(resultado).toBe(5)
  })

  test('Deve retornar um erro ao tentar dividir por zero', () => {
    expect(() => { new Calculadora().dividir(0,0) }).toThrow('Não é posssível dividir por zero')
  })

  test('Deve chamar o método subtrair com os valores corretos', () => {
    const calculadora = new Calculadora()
    const subSpy = jest.spyOn(calculadora, 'subtrair')
    calculadora.subtrair(2,2)
    expect(subSpy).toHaveBeenCalledWith(2,2)
  })

  test('Deve subtrair os valores e devolver o resultado correto', () => {
    const calculadora = new Calculadora()
    const resultado = calculadora.subtrair(2,2)
    expect(resultado).toBe(0)
  })

  test('Deve chamar o método multiplicar com os valores corretos', () => {
    const calculadora = new Calculadora()
    const multSpy = jest.spyOn(calculadora, 'multiplicar')
    calculadora.multiplicar(2,2)
    expect(multSpy).toHaveBeenCalledWith(2,2)
  })

  test('Deve multiplicar os valores e devolver o resultado correto', () => {
    const calculadora = new Calculadora()
    const resultado = calculadora.multiplicar(2,2)
    expect(resultado).toBe(4)
  })
})
