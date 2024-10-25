// classe concreta vs abstrata

//classe concreta tem 100% dos métodos concretos.
// uma interface tem só a assinatura dos métodos. 0% implementado
// Uma classe abstrata é uma classe incompleta, pode ter 10%, 20% etc.

//classe abstrata
abstract class Celular {
	// uma classe abstrata não pode ser instanciada, mas pode ser herdada. Obriga a instanciar classes específicas
	ligar() {
		console.log("Em ligação");
	}

	abstract acessarRedeMovel(): void; // Obrigada todas as classes filhas a implementar um métodos
}

// classe concreta
class Iphone23Pro extends Celular {
	acessarRedeMovel(): void {
		console.log("Usando rede 7.5G");
	}
}
class GalaxyS57Ultra extends Celular {
	acessarRedeMovel(): void {
		console.log("Usando rede 12G");
	} // Se não quiser utilizar o método obrigatoriamente, é necessario tornar a classe abstrata
}

let c1 = new GalaxyS57Ultra();

c1.ligar();
c1.acessarRedeMovel();

c1 = new Iphone23Pro();
c1.ligar();
c1.acessarRedeMovel();

export {};
