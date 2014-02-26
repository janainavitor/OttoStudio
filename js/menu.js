window.onload = function() {
	// chama-se raper eh um embrulho para os codigos criados para que sejam renderizados depois que a pagina
	// estiver carrregada.

	// variavel criada para mudar a cor do bg do menu quando for clicado
	var itensMenu = document.querySelectorAll("#menu li");

	// fazer com que todos os itens do menu recebam o onclick para pegar a classe active
	// criar um controle de repeticao definindo uma variavel que vai ser um contador
	//  cont < 6; pegar todos os itens menores que 6
	for(var cont = 0; cont < 6; cont = cont +1) {
	// 	console.log(itensmenu[cont]);
	// }

	//itensMenu[0] pegar o item de lista que esta em primeiro lugar
	itensMenu[cont].onclick = function() {

	// remove a classe active de todos os itens
	for(var x = 0; x < 6; x++) {
		itensMenu[x].className="";
	}

	// className eh um atributo para colocar classe no js
	this.className = "active";
	}

	console.dir(itensMenu);

}

}