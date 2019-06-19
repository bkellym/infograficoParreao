class TelaBiodiversidade{

	constructor(){

		this.menu = new Menu();

		this.objElipseBio = new Objetos(elipseBio, width/3.8, height/2, width/2.2, width/2.2);

		// Substituir apenas pelos títulos "Parque" e "Animais"...
		this.objTituloBio1 = new Objetos(tituloBio, width/1.6, height/6.4, width/4.8, (width/4.8) * 0.2);
		this.objTituloBio2 = new Objetos(tituloBio, width/1.15, height/6.4, width/4.8, (width/4.8) * 0.2);

		// Cards parque
		this.objCardsParque = [];
		for(let i = 3; i < 8; i++){
			this.objCardsParque.push(new Objetos(linhasContato, width/1.6, i*height/10, width/5.1, height/15));
		}

		this.objCardsEspecies = [];
			this.objCardsEspecies.push(new Objetos(linhasContato, width/1.15, 3*height/10, width/5.1, height/15));
		for(let i = 4; i < 9; i++){
			this.objCardsEspecies.push(new Objetos(linhasCurtas, width/1.22, i*height/10, (width/5.1)/2, height/15));
		}
		for(let i = 4; i < 9; i++){
			this.objCardsEspecies.push(new Objetos(linhasCurtas, width/1.08, i*height/10, (width/5.1)/2, height/15));
		}
	}

	exibir(){
		background('#998533');

		this.objElipseBio.exibir();

		this.objTituloBio1.exibir();
		this.objTituloBio2.exibir();

		for(let i = 0; i < 5; i++){
			this.objCardsParque[i].exibir();
		}

		for(let i = 0; i < 11; i++){
			this.objCardsEspecies[i].exibir();
		}

		this.menu.exibir();

		if(this.menu.mouseHover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}