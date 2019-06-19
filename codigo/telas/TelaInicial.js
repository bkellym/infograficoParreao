class TelaInicial{

	constructor(){
		this.menu = new Menu();

		// Demais objetos
		this.exibicao = new Objetos(fundoExibicao, width/1.39, height/3.08, width/2.5, (width/2.5) * 16/21);
		this.sombraExibicao = new Objetos(imgSombraExibicao, width/1.395, height/2.95, width/2.28, (width/2.28) * 16/21);
		this.mascote = new Objetos(posMascote, width/2.8, height/2.6, width/5.3, width/5.3);
		this.mapa = new Objetos(mapa, width/2.3, height/1.45, width * 3/4, (width * 3/4) * 3/8);
	}

	exibir(){
		background('#F1E2C3');

		// Demais objetos
		this.mascote.exibir();
		this.sombraExibicao.exibir();
		this.exibicao.exibir();
		this.mapa.exibir();

		this.menu.exibir();

		if(this.menu.mouseHover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}