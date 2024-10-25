// Interface herdando de interface

interface Entidade {
	id: string;
}

interface EntidadeComDatas extends Entidade {
	criadoEm?: Date; // createdAt
	atualizadoEm: Date; // updatedAt
	excluidoEm?: Date; // deletedAt
}

interface Usuario extends EntidadeComDatas {
	nome: string;
	email: string;
	senha?: string;
}

// Exemplo Usuário

const usuario1: Usuario = {
	id: "wuieuqwiueriwue-uqwieuqiwuei-uqwiueiuwqe",
	nome: "João",
	email: "joao@zmail.com",
	criadoEm: new Date(),
	atualizadoEm: new Date(),
};

console.log(usuario1);

// Exemplo de Produto

interface Vendavel {
	preco: number;
	desconto: number;
}

interface Produto extends EntidadeComDatas, Vendavel {
	nome: string;
}

const p1: Produto = {
	id: "cde-456",
	nome: "Tablet",
	preco: 1000,
	desconto: 0.05,
	atualizadoEm: new Date(),
};

console.log(p1);
export {};
