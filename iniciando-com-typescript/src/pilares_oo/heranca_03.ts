// classe que implementa uma interface

interface Usuario {
	id: number;
	nome: string;
	email: string;
	senha?: string;
}

interface CasoDeUso {
	executar(entrada: any): any;
}

// interface RegistrarUsuarioEntrada {
//   usuario: Usuario
//   professores:
// }

class RegistrarUsuario implements CasoDeUso {
	executar(usuario: Usuario) {
		console.log("Executando registrar usuario");
		console.log(usuario);
	}
}

const u1: Usuario = {
	id: 321,
	nome: "Maria",
	email: "maria@zmail.com",
	senha: "654321",
};

const casoDeUso: CasoDeUso = new RegistrarUsuario();
casoDeUso.executar(u1);
export {};
