class TelaSpash{

	constructor(img1, img2, img3){
		this.raio = width/6;
		this.posY = height/2;
		this.posX = width/4;

		// Objetos Imagem
		this.UFC = new Objetos(img1, this.posX, this.posY, this.raio, this.raio*(101/255));
		this.SMD = new Objetos(img2, 2 * this.posX, this.posY, this.raio, this.raio*(107/139));
		this.PARQUE = new Objetos(img3, 3 * this.posX, this.posY, this.raio, this.raio*(624/646));
	}

	exibir(){
		fill(0);
		textSize(50);
		textFont(fonteTitulo);
		text('APOIO:', 2 * this.posX, this.posY/2);

		this.UFC.exibir();
		this.SMD.exibir();
		this.PARQUE.exibir();
	}
}