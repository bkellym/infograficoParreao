class Texto{
	constructor(s, x, y, corPars, sizePars, fontePars){
		this.string = s;
		this.posX = x;
		this.posY = y;
		this.cor = color(corPars);
		this.size = sizePars;
		this.fonte = fontePars;
	}

	exibir(){
		//noStroke();

		textSize(this.size);
		textFont(this.fonte);

		fill(this.cor);
		text(this.string, this.posX, this.posY);
	}

	exibirInConteiner(largura, altura){
		textSize(this.size);
		textFont(this.fonte);

		fill(this.cor);
		text(this.string, this.posX, this.posY, largura, altura);
	}


}