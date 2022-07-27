export class Calculadora {
  somar (a: number, b: number): number {
    return a + b
  }

  dividir (a: number, b: number): number {
    if (a === 0 || b === 0) {
      throw new Error('Não é posssível dividir por zero')
    }
    return a / b
  }

  subtrair (a: number, b: number): number {
    return a - b
  }

  multiplicar (a: number, b: number): number {
    return a * b
  }
}
