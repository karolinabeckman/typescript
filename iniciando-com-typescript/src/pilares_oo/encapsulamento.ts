class Carro {
	private velocidadeAtual: number = 0; //só é visível na própria classe
	protected readonly VELOCIDADE_MAXIMA: number = 200; //é visível na própria classe e transmitido por herança

	constructor(public nome: string) {}

	get velocidade() {
		return this.velocidadeAtual;
	}

	protected alterarVelocidade(delta: number) {
		const novaVelocidade = this.velocidadeAtual + delta;

		if (novaVelocidade >= 0 && novaVelocidade <= this.VELOCIDADE_MAXIMA) {
			this.velocidadeAtual = novaVelocidade;
		}
	}

	acelerar() {
		this.alterarVelocidade(5);
	}
}

const c1 = new Carro("Fusca");
// console.log(c1.velocidadeAtual);
// console.log(c1.VELOCIDADE_MAXIMA);
// c1.alterarVelocidade(15);
console.log(c1.nome);
c1.acelerar();
c1.acelerar();
c1.acelerar();
console.log(c1.velocidade);

export {};
