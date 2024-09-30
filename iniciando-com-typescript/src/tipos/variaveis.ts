const nome: string = 'João'
console.log(nome)

let estaChovendo: boolean 
estaChovendo = true // -> É necessário inicializar a variável antes de chamá-la
console.log(estaChovendo)


let idade = 27 // -> inferiu que é do tipo number e não deixa trocar o tipo depois

let variavel: any = 4 //-> Pode receber qualquer tipo
variavel = 'Texto'
variavel = false
variavel = { nome: 'João' }
console.log(variavel)

let misterio; //-> se a variável n for inicializada e nem tipada, por padrão assumirá o tipo any
misterio = 4
misterio = 'Texto'
console.log(misterio)