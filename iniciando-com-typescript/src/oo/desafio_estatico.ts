class DesafioEstatico {
	//Atributo de instância
	nota: number = 1000; // não alterar esta linha

	// método de classe
	static executar() {
		//Imprimir o valor de nota no console.
		const desafioEstatico = new DesafioEstatico();
		const nota = desafioEstatico.nota;
		console.log(nota);
	}
}

DesafioEstatico.executar();
