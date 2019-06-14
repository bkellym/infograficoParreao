class TelaInicial{

	constructor(){
		// Menu e Botões
		this.contato = new Objetos(iconeContato, width/19.7, height/13.7, width/25.25, width/25.25);
		this.preservacao = new Objetos(iconePreserv, width/9.3, height/13.7, width/25.25, width/25.25);
		this.biodiversidade = new Objetos(iconeBiodiversidade, width/6, height/13.7, width/25.25, width/25.25);
		this.inicio = new Objetos(iconeInicio, width/4.5, height/13.7, width/25.25, width/25.25);
		this.menu = new Objetos(fundoMenu, width/7.1, height/10.3, width/4.2, (width/4.2) * 8/23);

		// Demais objetos
		this.exibicao = new Objetos(fundoExibicao, width/1.39, height/3.08, width/2.5, (width/2.5) * 16/21);
		this.mascote = new Objetos(posMascote, width/2.8, height/2.6, width/5.3, width/5.3);
		this.mapa = new Objetos(mapa, width/2.3, height/1.45, width * 3/4, (width * 3/4) * 3/8);
	}

	exibir(){
		background('#F1E2C3');

		// Menu e Botões
		this.menu.exibir();
		this.contato.exibir();
		this.preservacao.exibir();
		this.biodiversidade.exibir();
		this.inicio.exibir();

		// Demais objetos
		this.mascote.exibir();
		this.exibicao.exibir();
		this.mapa.exibir();
	}
}