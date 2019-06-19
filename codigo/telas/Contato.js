class TelaContato{

	constructor(){
		this.menu = new Menu();

		// Imagens de fundo
		this.fundoAz = new Objetos(fundoAzul, width/5.5, height/2, width/3.1, (width/3.1) * 3/2);
		this.sombraFundoAz = new Objetos(imgSombraContatoAzul, width/5.8, height/1.95, width/2.8, (width/2.9) * 3/2);
		this.fundoAm = new Objetos(fundoAmarelo, width/1.5, height/4, width/1.9, (width/1.9) * 5/12);
		this.sombraFundoAm = new Objetos(imgSombraHorizontal, width/1.52, height/3.8, width/1.8, (width/1.7) * 5/12);
		this.fundoV = new Objetos(fundoVerde, width/1.5, height - (height/4), width/1.9, (width/1.9) * 5/12);
		this.sombraFundoV = new Objetos(imgSombraHorizontal, width/1.52, height - (height/4.2), width/1.8, (width/1.7) * 5/12);

		// Imagens de Sobreposição
		this.elipse = new Objetos(elipseContato, width/5.5, height/2.8, width/3.5, width/3.5);
		this.linhas = [];
		this.linhas.push(new Objetos(linhasContato, width/5.5, height/1.5, width/3.5, (width/3.5) * 8/53));
		this.linhas.push(new Objetos(linhasContato, width/5.5, height/1.3, width/3.5, (width/3.5) * 8/53));
		this.linhas.push(new Objetos(linhasContato, width/5.5, height/1.15, width/3.5, (width/3.5) * 8/53));
		this.linhas.push(new Objetos(linhasCurtas, width/1.98, height/1.5, width/7, (width/7) * 8/27));
		this.linhas.push(new Objetos(linhasContato, width/1.32, height/1.5, width/3.5, (width/3.5) * 8/53));
		this.linhas.push(new Objetos(linhasCurtas, width/1.98, height/1.3, width/7, (width/7) * 8/27));
		this.linhas.push(new Objetos(linhasContato, width/1.32, height/1.3, width/3.5, (width/3.5) * 8/53));
		this.linhas.push(new Objetos(linhasCurtas, width/1.98, height/1.15, width/7, (width/7) * 8/27));
		this.linhas.push(new Objetos(linhasContato, width/1.32, height/1.15, width/3.5, (width/3.5) * 8/53));
	}

	exibir(){
		background('#F1E2C3');

		this.sombraFundoAz.exibir();
		this.fundoAz.exibir();
		this.sombraFundoAm.exibir();
		this.fundoAm.exibir();
		this.sombraFundoV.exibir();
		this.fundoV.exibir();

		this.elipse.exibir();

		for(let i = 0; i < 9; i++){
			this.linhas[i].exibir();	
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