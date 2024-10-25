class Curso {
	// readonly id: number;
	// public nome: string | undefined;

	constructor(readonly id: number, public nome?: string) {
		//-> A interrogação torna o atributo opcional
		// this.id = id;
		if (id < 1) throw new Error("Id inválido");
	}

	// get id() {
	// 	// this._id++;
	// 	return this._id;
	// }
}

const c1 = new Curso(123);
// c1.id = 456;
c1.nome = "Iniciando com TypeScript";
console.log(c1.nome);
console.log(c1.id);
console.log(c1.id);

const c2 = new Curso(456, "TypeScript Avançado");
console.log(c2);

export {};
