export default class Validador {
	static readonly ERRO_DESCONHECIDO = "erro desconhecido";

	static maiorQueZero(n: number, msgErro: string) {
		if (n <= 0) throw new Error(msgErro);
	}

	static tamanhoEntre(nome: string, min: number, max: number, msgErro: string) {
		Validador.entre(nome.length, min, max, msgErro);
	}

	static entre(n: number, min: number, max: number, msgErro: string) {
		if (n < min || n > max) throw new Error(msgErro);
	}
}
