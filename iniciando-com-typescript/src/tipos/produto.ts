//tipo->  produto: nome, preco, desconto (0-1), funcao precoComDesconto. 

type Produto = { 
  nome: string, 
  preco: number, 
  desconto: number, 
  precoComDesconto: () => number}


const produto: Produto = {
  nome: 'MacBook',
  preco: 14500,
  desconto: 0.1,
  precoComDesconto(): number {
    return this.preco * (1 - this.desconto)
  }
}

console.log(`Nome do Produto: ${produto.nome}`)
console.log(`Preço: R$ ${produto.preco}`)
console.log(`Desconto: ${produto.desconto * 100}%`)
console.log(`Valor Final: R$ ${produto.precoComDesconto()}`)
