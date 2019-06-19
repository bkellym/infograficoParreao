class TelaBiodiversidade{

	constructor(){

		this.exibindoCard = false;

		this.numeroCard = 0;

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

		this.cartõesParque = [];
		for(let i = 0; i < 5; i++){
			this.cartõesParque.push();
		}

		this.cartõesEspecies = [];
		for(let i = 0; i < 11; i++){
			this.cartõesParque.push();
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

		if(!this.exibindoCard){

			for(let i = 0; i < 5; i++){
				this.objCardsParque[i].interacaoHoverRectCard();
			}

			for(let i = 0; i < 11; i++){
				this.objCardsEspecies[i].interacaoHoverRectCard();
			}


			if(this.objCardsParque[0].interacaoEscolherCard(1) != 0){
				this.exibindoCard = true;
				this.numeroCard = 1;
			}
			else if(this.objCardsParque[1].interacaoEscolherCard(2) != 0){
				this.exibindoCard = true;
				this.numeroCard = 2;
			}
			else if(this.objCardsParque[2].interacaoEscolherCard(3) != 0){
				this.exibindoCard = true;
				this.numeroCard = 3;
			}
			else if(this.objCardsParque[3].interacaoEscolherCard(4) != 0){
				this.exibindoCard = true;
				this.numeroCard = 4;
			}
			else if(this.objCardsParque[4].interacaoEscolherCard(5) != 0){
				this.exibindoCard = true;
				this.numeroCard = 5;
			}
			else if(this.objCardsEspecies[0].interacaoEscolherCard(6) != 0){
				this.exibindoCard = true;
				this.numeroCard = 6;
			}
			else if(this.objCardsEspecies[1].interacaoEscolherCard(7) != 0){
				this.exibindoCard = true;
				this.numeroCard = 7;
			}
			else if(this.objCardsEspecies[2].interacaoEscolherCard(8) != 0){
				this.exibindoCard = true;
				this.numeroCard = 8;
			}
			else if(this.objCardsEspecies[3].interacaoEscolherCard(9) != 0){
				this.exibindoCard = true;
				this.numeroCard = 9;
			}
			else if(this.objCardsEspecies[4].interacaoEscolherCard(10) != 0){
				this.exibindoCard = true;
				this.numeroCard = 10;
			}
			else if(this.objCardsEspecies[5].interacaoEscolherCard(11) != 0){
				this.exibindoCard = true;
				this.numeroCard = 11;
			}
			else if(this.objCardsEspecies[6].interacaoEscolherCard(12) != 0){
				this.exibindoCard = true;
				this.numeroCard = 12;
			}
			else if(this.objCardsEspecies[7].interacaoEscolherCard(13) != 0){
				this.exibindoCard = true;
				this.numeroCard = 13;
			}
			else if(this.objCardsEspecies[8].interacaoEscolherCard(14) != 0){
				this.exibindoCard = true;
				this.numeroCard = 14;
			}
			else if(this.objCardsEspecies[9].interacaoEscolherCard(15) != 0){
				this.exibindoCard = true;
				this.numeroCard = 15;
			}
			else if(this.objCardsEspecies[10].interacaoEscolherCard(16) != 0){
				this.exibindoCard = true;
				this.numeroCard = 16;
			}


		}else{
			fill(0, 150);
			rect(width/2, height/2, width, height);

			if(this.numeroCard > 0 && this.numeroCard < 5){

			}else if(this.numeroCard >= 5 && this.numeroCard < 16){

			}
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