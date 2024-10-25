// Produto (id, nome, preco, desc, precoFinal)
// Tem que ter id válido.
// Nome entre (2-250 caracteres)
// Preço (> 0)
// Desc (0 - 0.8)

import Validador from "./Validador";

class Produto {
	constructor(
		readonly id: number,
		readonly nome: string,
		readonly preco: number,
		readonly desconto: number = 0 // precoFinal?: () => number
	) {
		// Se o método for static, não é necessário instanciar
		// new Validador().maiorQueZero(id, "idInválido")
		// const validador = new Validador();
		Validador.maiorQueZero(id, "idInválido");
		// if (id <= 0) throw new Error("Id Inválido");
		// if (nome.length < 2 || nome.length > 250) throw new Error("Nome inválido");
		Validador.tamanhoEntre(nome, 2, 250, "Nome inválido");
		// if (preco <= 0) throw new Error("Preço inválido");
		Validador.maiorQueZero(preco, "Preço Inválido");
		// if (desconto < 0 || desconto > 0.8) throw new Error("Desconto inválido");
		Validador.entre(desconto, 0, 0.8, "Desconto inválido");
	}

	//  precoFinal() {
	// 	return this.preco * (1 - this.desconto);
	// }

	get precoFinal() {
		return this.preco * (1 - this.desconto);
	}
}

const p1 = new Produto(1, "Caneta", 12.5, 0.1);
console.log(p1);
console.log(p1.nome, p1.precoFinal);

const p2 = new Produto(2, "Notebook", 7860);
console.log(p2);
console.log(p2.nome, p2.preco);

console.log(Validador.ERRO_DESCONHECIDO);

export { Produto };
