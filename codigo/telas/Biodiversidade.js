class TelaBiodiversidade{

	constructor(){

		this.exibindoCard = false;
		this.transicaoCard = false;

		this.numeroCard = 0;
		this.numeroProxCard = 0;

		this.tempoTransicaoCard = 0;

		this.objElipseBio = new Objetos(elipseBio, width/3.8, height/2, width/2.2, width/2.2);

		// Substituir apenas pelos títulos "Parque" e "Animais"...
		this.objTituloBio1 = new Objetos(tituloBio, width/1.6, height/6.4, width/4.8, (width/4.8) * 0.2);
		this.objTituloBio2 = new Objetos(tituloBio, width/1.15, height/6.4, width/4.8, (width/4.8) * 0.2);

		this.passarDireita = new Objetos(paraDireita, width/15, height/2, width/15, width/15);
		this.passarEsquerda = new Objetos(paraEsquerda, width - (width/15), height/2, width/15, width/15);

		this.menu = new Menu();

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
			this.cartõesParque.push(new Objetos(cardsParqueT[i], width/2, height/2, width/2, (width/2) * 9/16));
		}

		this.cartõesEspecies = [];
		for(let i = 0; i < 11; i++){
			this.cartõesEspecies.push(new Objetos(cardsEspeciesT[i], width/2, height/2, width/2, (width/2) * 9/16));
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
				this.numeroCard = this.numeroProxCard = 1;
			}
			else if(this.objCardsParque[1].interacaoEscolherCard(2) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 2;
			}
			else if(this.objCardsParque[2].interacaoEscolherCard(3) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 3;
			}
			else if(this.objCardsParque[3].interacaoEscolherCard(4) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 4;
			}
			else if(this.objCardsParque[4].interacaoEscolherCard(5) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 5;
			}
			else if(this.objCardsEspecies[0].interacaoEscolherCard(6) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 6;
			}
			else if(this.objCardsEspecies[1].interacaoEscolherCard(7) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 7;
			}
			else if(this.objCardsEspecies[2].interacaoEscolherCard(8) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 8;
			}
			else if(this.objCardsEspecies[3].interacaoEscolherCard(9) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 9;
			}
			else if(this.objCardsEspecies[4].interacaoEscolherCard(10) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 10;
			}
			else if(this.objCardsEspecies[5].interacaoEscolherCard(11) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 11;
			}
			else if(this.objCardsEspecies[6].interacaoEscolherCard(12) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 12;
			}
			else if(this.objCardsEspecies[7].interacaoEscolherCard(13) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 13;
			}
			else if(this.objCardsEspecies[8].interacaoEscolherCard(14) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 14;
			}
			else if(this.objCardsEspecies[9].interacaoEscolherCard(15) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 15;
			}
			else if(this.objCardsEspecies[10].interacaoEscolherCard(16) != 0){
				this.exibindoCard = true;
				this.numeroCard = this.numeroProxCard = 16;
			}

		} else if(this.transicaoCard){

			fill(0, 150);
			rect(width/2, height/2, width, height);

			if(this.tempoTransicaoCard < 8){
				//Esquerda
				if(this.numeroProxCard > this.numeroCard){
					if(this.numeroCard > 0 && this.numeroCard <= 5){
						this.cartõesParque[this.numeroCard - 1].exibirMoverEsquerda(width/6 * this.tempoTransicaoCard);
					}else if(this.numeroCard > 5 && this.numeroCard <= 16){
						this.cartõesEspecies[this.numeroCard - 6].exibirMoverEsquerda(width/6 * this.tempoTransicaoCard);
					}

					if(this.numeroProxCard > 0 && this.numeroProxCard <= 5){
						this.cartõesParque[this.numeroProxCard - 1].exibirTrazerDaDireita(width - (width/6 * this.tempoTransicaoCard));
					}else if(this.numeroProxCard > 5 && this.numeroProxCard <= 16){
						this.cartõesEspecies[this.numeroProxCard - 6].exibirTrazerDaDireita(width - (width/6 * this.tempoTransicaoCard));
					}
				}
				//Direita
				else{
					if(this.numeroCard > 0 && this.numeroCard <= 5){
						this.cartõesParque[this.numeroCard - 1].exibirMoverDireita(width/6 * this.tempoTransicaoCard);
					}else if(this.numeroCard > 5 && this.numeroCard <= 16){
						this.cartõesEspecies[this.numeroCard - 6].exibirMoverDireita(width/6 * this.tempoTransicaoCard);
					}

					if(this.numeroProxCard > 0 && this.numeroProxCard <= 5){
						this.cartõesParque[this.numeroProxCard - 1].exibirTrazerDaEsquerda(width/6 * this.tempoTransicaoCard);
					}else if(this.numeroProxCard > 5 && this.numeroProxCard <= 16){
						this.cartõesEspecies[this.numeroProxCard - 6].exibirTrazerDaEsquerda(width/6 * this.tempoTransicaoCard);
					}
				}
				this.tempoTransicaoCard++;
			}
			else{
				this.numeroCard = this.numeroProxCard;
				this.transicaoCard = false;
				this.tempoTransicaoCard = 0;
			}
		}else{
			fill(0, 150);
			rect(width/2, height/2, width, height);

			if(this.numeroCard > 0 && this.numeroCard <= 5){
				this.cartõesParque[this.numeroCard - 1].exibir();
			}else if(this.numeroCard > 5 && this.numeroCard <= 16){
				this.cartõesEspecies[this.numeroCard - 6].exibir();
			}

			if(this.numeroCard == 1){
				this.passarEsquerda.exibir();
				this.passarEsquerda.interacaoHoverEllipse();
				this.numeroProxCard += this.passarEsquerda.interacaoPassarCard(true);
			}else if(this.numeroCard > 1 && this.numeroCard < 16){
				this.passarEsquerda.exibir();
				this.passarEsquerda.interacaoHoverEllipse();
				this.numeroProxCard += this.passarEsquerda.interacaoPassarCard(true);
				this.passarDireita.exibir();
				this.passarDireita.interacaoHoverEllipse();
				this.numeroProxCard += this.passarDireita.interacaoPassarCard(false);
			}else if(this.numeroCard == 16){
				this.passarDireita.exibir();
				this.passarDireita.interacaoHoverEllipse();
				this.numeroProxCard += this.passarDireita.interacaoPassarCard(false);
			}

			if(this.numeroCard != this.numeroProxCard){
				this.transicaoCard = true;
			}

		}

		if(this.numeroCard > 16){
			this.numeroCard = 0;
			this.exibindoCard = false;
		}

		if(this.numeroCard == 0){
			this.exibindoCard = false;
		}
		

		this.menu.exibir();

		if(this.menu.mouseHover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
		console.log("Atual: " + this.numeroCard + " Próximo: " +this.numeroProxCard);
	}
}