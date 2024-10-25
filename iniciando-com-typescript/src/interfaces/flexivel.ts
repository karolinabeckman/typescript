interface Flexivel {
	nome: string;
	[atributo: string]: any;
}

const f1: Flexivel = {
	nome: "Teste",
	idade: 44,
	salario: 12345,
	deps: [{}],
};

console.log(f1.nome);

export {};
