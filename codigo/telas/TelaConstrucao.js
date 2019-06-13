class TelaConstrucao {
	
	constructor(img, imagemVoltar) {
		// coordenadas usadas para o posicionamento do botão voltar. iguais à tela de Biodiversidade.
		this.largura = width/5;
		this.posX = width/6;
		this.posY = height/2;

		this.icone_construcao = new Objetos(img, width/2, height/2, width/4, width/4);
		this.voltar = new Objetos(imagemVoltar, this.largura/4, height - this.largura/4, this.largura/4, this.largura/4);
	}

	exibir() {
		background(255,140,48);

		this.icone_construcao.exibir();
		textFont(fonteTitulo);
		textSize(50);
		text('PÁGINA EM CONSTRUÇÃO', width/2, height/2+width/5);

		this.voltar.interacaoClicarMudarTela(EstadoTelaInicial);
		this.voltar.interacaoHoverEllipse();
		this.voltar.exibir();
	}
}