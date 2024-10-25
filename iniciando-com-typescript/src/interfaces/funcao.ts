interface OperacaoMatematicaObj {
	fn: (n1: number, n2: number) => number;
}

const somaObj: OperacaoMatematicaObj = {
	fn(n1, n2) {
		return n1 + n2;
	},
};

console.log(somaObj.fn(7, 10));

interface OperacaoMatematica {
	(n1: number, n2: number): number;
}

const soma: OperacaoMatematica = (a: number, b: number) => {
	return a + b;
};
const subtracao: OperacaoMatematica = (a: number, b: number) => {
	return a - b;
};
const multiplicacao: OperacaoMatematica = (a: number, b: number) => {
	return a * b;
};
const divisao: OperacaoMatematica = (a: number, b: number) => {
	return a / b;
};

console.log(soma(1, 8));
console.log(subtracao(1, 8));
console.log(multiplicacao(1, 8));
console.log(divisao(1, 8));
