class TelaInicial{

	constructor(){
		this.menu = new Menu();

		// Demais objetos
		this.exibicao = new Objetos(fundoExibicao, width/1.39, height/3.08, width/2.5, (width/2.5) * 16/21);
		this.sombraExibicao = new Objetos(imgSombraExibicao, width/1.395, height/2.95, width/2.28, (width/2.28) * 16/21);
		this.mascote = new Objetos(posMascote, width/2.8, height/2.6, width/5.3, width/5.3);
		this.mapa = new Objetos(mapa, width/2, height/2, width, height);
	}

	exibir(){
		background('#F1E2C3');

		// Demais objetos
		this.mapa.exibir();
		this.mascote.exibir();
		this.sombraExibicao.exibir();
		this.exibicao.exibir();

		this.menu.exibir();
		this.menu.exibirTextoTelaInicial();

		if(this.menu.mouseHover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}