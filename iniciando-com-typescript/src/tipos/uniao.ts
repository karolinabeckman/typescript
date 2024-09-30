let nota: number | string = 10 // tipo União
nota= 'A+'

console.log(nota)

type NotaOuConceito = number | 'A' | 'B' | 'C' | 'D' | 'E' | 'F' // Nota Ou Conceito = alias(apelido)

let n1: NotaOuConceito = 7
n1 = 'C'

console.log(n1)
