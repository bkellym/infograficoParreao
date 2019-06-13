class CartaoAnimal {

	constructor(imagemVoltar, corFundo, imagemCard, imgFundoCard, textoTitulo, textoLinha1, textoLinha2, textoLinha3){

		//Variáveis de posicionamento
		this.altura = height * 0.8;
		this.largura = height * 0.8 * 3/4;
		this.posX = width/2 * 0.7;
		this.posY = height/2;

		//Variáveis de design
		this.corFundo = color(corFundo);
		this.img = imagemCard;
		this.imgFundo = imgFundoCard;
		this.Imagem = new Objetos(this.img, this.posX, this.posY * 0.78, this.largura * 0.9, this.largura * 0.9 * 3/4);
		this.fundo = new Objetos(this.imgFundo, this.posX, this.posY, this.largura, this.altura)

		//Variaveis de informação
		this.Titulo = new Texto(textoTitulo, this.posX, (this.posY - this.altura/2) * 1.4, 255, 30, fonteTitulo);
		this.Linha1 = new Texto(textoLinha1, this.posX * 1.04, (this.posY + this.altura/2) * 0.71, 0, 12, fonteConteudo);
		this.Linha2 = new Texto(textoLinha2, this.posX * 1.04, (this.posY + this.altura/2) * 0.82, 0, 12, fonteConteudo);
		this.Linha3 = new Texto(textoLinha3, this.posX * 1.04, (this.posY + this.altura/2) * 0.93, 0, 12, fonteConteudo);

		// coordenadas usadas para o posicionamento do botão voltar. iguais à tela de Biodiversidade.
		this.largura_voltar = width/5;
		this.voltar = new Objetos(imagemVoltar, this.largura_voltar/4, height - this.largura_voltar/4, this.largura_voltar/4, this.largura_voltar/4);
	}

	exibir(){
		//Fundo
		this.fundo.exibir();

		//Título
		stroke(255, 255, 255, 75);
		strokeWeight(3);
		noFill();
		rect(this.posX, (this.posY - this.altura/2) * 1.4, this.largura * 0.9, this.altura * 0.08);

		// Configurações título
		stroke(0, 128);
		strokeWeight(3);
		this.Titulo.exibir();
		noStroke();

		//Imagem
		this.Imagem.exibir();

		//Linhas
		this.exibirIcone((this.posX - this.largura/2) * 1.12, (this.posY + this.altura/2) * 0.71, "1");
		this.exibirLinha(this.posX * 1.04, (this.posY + this.altura/2) * 0.71);
		this.Linha1.exibir();

		//Linhas
		this.exibirIcone((this.posX - this.largura/2) * 1.12, (this.posY + this.altura/2) * 0.82, "2");
		this.exibirLinha(this.posX * 1.04, (this.posY + this.altura/2) * 0.82);
		this.Linha2.exibir();

		//Linhas
		this.exibirIcone((this.posX - this.largura/2) * 1.12, (this.posY + this.altura/2) * 0.93, "3");
		this.exibirLinha(this.posX * 1.04, (this.posY + this.altura/2) * 0.93);
		this.Linha3.exibir();
	}

	exibirIcone(x, y, num){
		fill(255);
		ellipse(x, y, this.largura * 0.1, this.largura * 0.1);
		fill(0);
		textSize(20);
		textFont(fonteTitulo);
		text(num, x, y);
	}

	exibirLinha(x, y){
		fill(255);
		rect(x, y, this.largura * 0.8, this.altura * 0.09, 10);
	}

	//Fim código do cartão
}