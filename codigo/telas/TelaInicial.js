class TelaInicial{

	constructor(imagemContato, imagemPassaro, imagemGMaps){
		this.diam = width/12;
		this.posX = width/4;
		this.posY = height/4;

		this.alturaMapa = height * 0.85;

		this.botaoPassaro = new Objetos(imagemPassaro,  this.diam, 2 * this.posY - (this.diam + this.diam/4), this.diam, this.diam);
		this.botaoContato = new Objetos(imagemContato, this.diam,  2 * this.posY, this.diam, this.diam);
		this.botaoGMaps = new Objetos(imagemGMaps,  this.diam, 2 * this.posY + (this.diam + this.diam/4), this.diam, this.diam);

		this.mapa = new Objetos(mapa, width * 0.55, this.posY * 2, this.alturaMapa * 47/50, this.alturaMapa);
	}

	exibir(){

		background(255, 236, 174, 110);

		this.botaoPassaro.interacaoHoverTexto("Categorias");
		this.botaoPassaro.interacaoClicarMudarTela(EstadoTelaCategorias);
		this.botaoPassaro.interacaoHoverEllipse();
		this.botaoPassaro.exibir();

		this.botaoContato.interacaoHoverTexto("Entre em\nContato");
		this.botaoContato.interacaoClicarMudarTela(EstadoTelaContato);
		this.botaoContato.interacaoHoverEllipse();
		this.botaoContato.exibir();

		this.botaoGMaps.interacaoHoverTexto("Como Chegar");
		this.botaoGMaps.interacaoClicarMaps();
		this.botaoGMaps.interacaoHoverEllipse();
		this.botaoGMaps.exibir();

		this.mapa.exibir();

		if(this.botaoContato.hover || this.botaoPassaro.hover || this.botaoGMaps.hover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}