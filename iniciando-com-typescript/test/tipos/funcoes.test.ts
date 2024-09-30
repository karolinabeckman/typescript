import { saudacao, multiplicar, multiplicarPerigosa } from "../../src/tipos/funcoes"

// test('Deve retornar uma saudação baseada na hora atual', () => {
//   const s = saudacao()
//   expect(s).toBe('Boa tarde')
// })

test('Deve retornar uma saudação baseada na hora atual', () => {
  const s = saudacao('João')
  expect(s).toBe('Olá João! Passar bem!')
})

test('Deve multiplicar dois números', () => {
  const resultado = multiplicar(2,5)
  expect(resultado).toBe(10)
})

test('Deve retornar NaN com parametro do tipo string', () => {
  const resultado = multiplicarPerigosa('a',5)
  expect(resultado).toBeNaN()
})