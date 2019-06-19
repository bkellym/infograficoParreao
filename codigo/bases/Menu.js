class Menu {
	constructor(){

		this.coorBotYMin = -height/16;
		this.coorMenuYMin = -height/(12.6)/2;

		this.coorBotYMax = height/20;
		this.coorMenuYMax = height/(15);

		this.coorBotY = this.coorBotYMin;
		this.coorMenuY = this.coorMenuYMin;

		this.mouseHover = false;

		// Menu e Botões
		this.contato = 			new Objetos(iconeContato, 			width/19.7, 	this.coorBotY, width/25.25, width/25.25);
		this.preservacao = 		new Objetos(iconePreserv, 			width/9.3, 		this.coorBotY, width/25.25, width/25.25);
		this.biodiversidade = 	new Objetos(iconeBiodiversidade, 	width/6, 		this.coorBotY, width/25.25, width/25.25);
		this.inicio = 			new Objetos(iconeInicio, 			width/4.5, 		this.coorBotY, width/25.25, width/25.25);
		this.menu = 			new Objetos(fundoMenu, 				width/7.1, 		this.coorMenuY, width/4.2, (width/4.2) * 8/23);
	}

	exibir(){

		if(this.contato.hover || this.preservacao.hover || this.biodiversidade.hover || this.inicio.hover){
			this.mouseHover = true;
		}else{
			this.mouseHover = false;
		}

		// Menu e Botões
		this.menu.exibir();
		this.contato.exibir();
		this.preservacao.exibir();
		this.biodiversidade.exibir();
		this.inicio.exibir();


		// Interação
		this.contato.interacaoHoverEllipse();
		this.preservacao.interacaoHoverEllipse();
		this.biodiversidade.interacaoHoverEllipse();
		this.inicio.interacaoHoverEllipse();

		this.contato.interacaoClicarTela("contato.html");
		this.preservacao.interacaoClicarTela("preservacao.html");
		this.biodiversidade.interacaoClicarTela("biodiversidade.html");
		this.inicio.interacaoClicarTela("index.html");

		if(this.menu.hoverMouseRect()){
			if(this.coorBotY < this.coorBotYMax){
				this.coorBotY += this.coorMenuYMax*0.3;
			}
			else{
				this.coorBotY = this.coorBotYMax;
			}

			if(this.coorMenuY < this.coorMenuYMax*0.3){
				this.coorMenuY += this.coorMenuYMax*0.3;
			}
			else{
				this.coorMenuY = this.coorMenuYMax;
			}
		}
		else{
			if(this.coorBotY > this.coorBotYMin){
				this.coorBotY -= this.coorMenuYMax*0.3;
			}
			else{
				this.coorBotY = this.coorBotYMin;
			}

			if(this.coorMenuY > this.coorMenuYMin*0.3){
				this.coorMenuY -= this.coorMenuYMax*0.3;
			}
			else{
				this.coorMenuY = this.coorMenuYMin;
			}
		}

		this.menu.setXeY(this.menu.posX, this.coorMenuY);
		this.contato.setXeY(this.contato.posX, this.coorBotY);
		this.preservacao.setXeY(this.preservacao.posX, this.coorBotY);
		this.biodiversidade.setXeY(this.biodiversidade.posX, this.coorBotY);
		this.inicio.setXeY(this.inicio.posX, this.coorBotY);
	}

	exibirTextoTelaInicial(){
		 this.contato.interacaoHoverTextoInicial(textoHoverContato);
		 this.preservacao.interacaoHoverTextoInicial(textoHoverPreserv);
		 this.biodiversidade.interacaoHoverTextoInicial(textoHoverBiodiv);
		 this.inicio.interacaoHoverTextoInicial(textoHoverHome);
	}
}