// type ContaCorrente (numero, saldo, movimentar)
// type Cliente  (nome, email, contas[])

//lista clientes = [ ... ]

// movimentarConta(numConta: number, valor: number)

// console.log(...)

type ContaCorrente = {
	numero: number;
	saldo: number;
	movimentar: (valor: number) => void;
};

type Cliente = {
	nome: string;
	email: string;
	contas: ContaCorrente[];
};

function movimentar(this: ContaCorrente, valor: number) {
	this.saldo += valor;
}

const clientes: Cliente[] = [
	{
		nome: "Ana",
		email: "ana@zmail.com",
		contas: [
			{ numero: 1234, saldo: 0, movimentar },
			{ numero: 6444, saldo: 350.33, movimentar },
		],
	},
	{
		nome: "João",
		email: "joao@zmail.com",
		contas: [
			{ numero: 3232, saldo: 670.12, movimentar },
			{ numero: 3000, saldo: 1398.89, movimentar },
		],
	},
];

function movimentarConta(numConta: number, valor: number) {
	const conta = clientes
		.map((cliente) => {
			return cliente.contas.find((cc) => cc.numero === numConta);
		})
		.filter((c) => c !== undefined)[0];
	conta?.movimentar(valor);
}

function consultarSaldo(numConta: number): number | null {
	const conta = clientes
		.map((cliente) => {
			return cliente.contas.find((cc) => cc.numero === numConta);
		})
		.filter((c) => c)[0];

	return conta?.saldo ?? null;
}

movimentarConta(3232, 678.9);
console.log(consultarSaldo(3232));

movimentarConta(3000, -398.89);
console.log(consultarSaldo(3000)?.toFixed(2));

// const clientes: Cliente[] = [
// 	{
// 		nome: "Ana",
// 		email: "ana@zmail.com",
// 		contas: [
// 			{
// 				numero: 1234,
// 				saldo: 1000,
// 				movimentar(valor: number) {
// 					this.saldo += valor;
// 				},
// 			},
// 			{
// 				numero: 6444,
// 				saldo: 1000,
// 				movimentar(valor: number) {
// 					this.saldo += valor;
// 				},
// 			},
// 		],
// 	},
// ];
