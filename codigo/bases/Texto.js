class Texto{
	constructor(s, x, y, corPars, sizePars, fontePars){
		this.string = s;
		this.posX = x;
		this.posY = y;
		this.cor = color(corPars);
		this.size = sizePars;
		this.fonte = fontePars;
		this.containerX = height * 0.8 * 3/4;
		this.containerY = height * 0.8;
	}

	exibir(){
		//noStroke();

		textSize(this.size);
		textFont(this.fonte);

		fill(this.cor);
		text(this.string, this.posX, this.posY, this.containerX * 0.8, this.containerY * 0.09);
	}


}