// alert("Ola mundo");
var nome = "janaina";
var idade = 25;
var alto = false;

// console.log(funcao para mostrar no browser)("log:", (parametro que esta dentro de nome)nome, (mostrar o tipo de dado que esta dentro da variavel nome)typeof nome);
console.log("log:", nome, typeof nome);
console.log("idade:", idade, typeof idade);
console.log("alto:", alto, typeof alto);

// var hobbies = (para criar uma lista de itens usar um array []) ["videogame", "estudar", "passear"]
var hobbies = ["videogame", "estudar", "passear"]

// console.dir eh usado para mostrar o resultado de listas);
console.dir(hobbies);
console.log(hobbies[1]);

// mostrar a quantidade de itens da lista
console.log(hobbies.length);

// para criar suas proprias funcoes: function nome da funcao abre parenteses abre chaves para criar um bloco
function soma(x,y) {
return x + y;
}

// objetos possuem propriedades (caracteristicas) e metodos (acoes)
var carro = {
	cor: "vermelho",
	marca: "volks",
	modelo: "gol",
	combustivel: "flex",
	motor: 1.6,
	confiavel: true,
	// uma funcao dentro de objeto pode nao ter um nome e vai uar o nome do valor ligar (funcao anonima)
	ligar: function() {
		console.log("o" + this.modelo + "esta ligado");
		// usa-se o this que eh o mesmo que carro.modelo
		},
		desligar: function() {
			console.log("o" + this.marca + "esta desligado");

		}
};
console.dir(carro);
// dentro do metodo pode ser usado mais de um parametro