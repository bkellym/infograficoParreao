class Categorias{

	constructor(imagemRepteis, imagemAves, imagemAnfibios, imagemPerserv, imagemVoltar){
		this.largura = width/14;
		this.posY = height/2;
		this.alturaMapa = height * 0.75;

		this.repteis = new Objetos(imagemRepteis, this.largura * 1.3, this.posY - 2 * this.largura, this.largura, this.largura);
		this.aves = new Objetos(imagemAves, this.largura * 1.3, this.posY - 0.7 * this.largura, this.largura, this.largura);
		this.anfibios = new Objetos(imagemAnfibios, this.largura * 1.3, this.posY + 0.7 * this.largura, this.largura, this.largura);
		this.preservacao = new Objetos(imagemPerserv, this.largura * 1.3, this.posY + 2 * this.largura, this.largura, this.largura);

		this.mapa = new Objetos(mapa, width * 0.75, this.posY, this.alturaMapa * 47/50, this.alturaMapa);

		this.voltar = new Objetos(imagemVoltar, this.largura/2, height - this.largura/2, this.largura/2, this.largura/2);
	}

	exibir(){

		background(255, 236, 174, 110);

		this.repteis.interacaoExibirCartao(EstadoCartaoReptil);
		this.repteis.interacaoHoverEllipse();
		this.repteis.exibir();

		this.aves.interacaoExibirCartao(EstadoCartaoAve);
		this.aves.interacaoHoverEllipse();
		this.aves.exibir();

		this.anfibios.interacaoExibirCartao(EstadoCartaoAnfibio);
		this.anfibios.interacaoHoverEllipse();
		this.anfibios.exibir();

		this.preservacao.interacaoExibirCartao(EstadoCartaoGato);
		this.preservacao.interacaoHoverEllipse();
		this.preservacao.exibir();

		this.voltar.interacaoClicarMudarTela(EstadoTelaInicial);
		this.voltar.interacaoHoverEllipse();
		this.voltar.exibir();

		this.mapa.exibir();

		if(this.repteis.hover || this.aves.hover || this.anfibios.hover || this.voltar.hover || this.preservacao.hover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}