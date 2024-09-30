type OperacaoFn = (a: number, b: number) => number
// type NumeroOuTexto = string | number

// let x: NumeroOuTexto

let operacao: OperacaoFn
// let operacao: (a: number, b: number) => number
let opX: OperacaoFn

function somar(n1: number, n2: number): number {
  return n1 + n2
}

function multiplicar(n1: number, n2: number): number{
  return n1 * n2
}
operacao = somar
console.log(operacao(2,5))

operacao = multiplicar
console.log(operacao(2,5))