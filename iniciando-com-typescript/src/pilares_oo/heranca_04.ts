class Carro {
	private _velocidade: number = 0;

	constructor(readonly velocidadeMaxima: number = 200) {}

	get velocidade() {
		return this._velocidade;
	}

	public acelerar() {
		this.alterarVelocidade(5);
	}

	public frear() {
		this.alterarVelocidade(-5);
	}

	protected alterarVelocidade(delta: number) {
		const novaVelocidade = this._velocidade + delta;

		//198 (200)
		// +5
		if (novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima) {
			this._velocidade = novaVelocidade;
		} else if (novaVelocidade >= this.velocidadeMaxima) {
			this._velocidade = this.velocidadeMaxima;
		} else {
			this._velocidade = 0;
		}
	}
}

class Fusca extends Carro {
	constructor() {
		super(165); // chamou o construtor da classe pai passando outro valor de velocidadeMaxima padrão
	}
}

class Ferrari extends Carro {
	constructor() {
		super(355);
	}

	public acelerar(): void {
		this.alterarVelocidade(35);
	}

	public frear(): void {
		this.alterarVelocidade(-15);
	}
}

let c1: Fusca = new Fusca();

c1.acelerar();
c1.acelerar();
c1.acelerar();

console.log(c1.velocidade);
console.log(c1.velocidadeMaxima);

c1 = new Ferrari();

c1.acelerar();
c1.acelerar();
c1.acelerar();

console.log(c1.velocidade);
console.log(c1.velocidadeMaxima);

export {};
