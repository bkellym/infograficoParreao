class Objetos {
	constructor(img, x, y, a, l){
		this.imagem = img;
		this.raioABase = a;
		this.raioLBase = l;
		this.posX = x;
		this.posY = y;

		this.hover = false;

		this.raioA = this.raioABase;
		this.raioL = this.raioLBase;
	}

	hoverMouse(){
		if(dist(mouseX, mouseY, this.posX, this.posY) <= this.raioABase/2){
			return true;
		}
		else{
			return false;
		}
	}

	interacaoHoverEllipse(){
		if(this.hoverMouse()){
			this.raioA = this.raioABase + 15;
			this.raioL = this.raioLBase + 15;
			this.hover = true;
		}else{
			this.raioA = this.raioABase;
			this.raioL = this.raioLBase;
			this.hover = false;
		}
	}

	interacaoClicarMudarTela(tela){
		if(this.hoverMouse()){
			if(mouseIsPressed){
				TELA = tela;
			}
		}
	}

	interacaoClicarMaps(){
		if(this.hoverMouse()){
			if(mouseIsPressed){
				window.open("https://goo.gl/maps/FjgJCgvgiX7TpC7H9");
			}
		}
	}

	interacaoHoverTexto(string){

		let tituloBotao = new Texto(string, this.posX + this.raioLBase * 1.5, this.posY, 0, 20, fonteConteudoBold);

		if(this.hoverMouse()){
			tituloBotao.exibir();
		}
	}

	interacaoExibirCartao(cartao){
		if(this.hoverMouse()){
			if(mouseIsPressed){
				CARTAO = cartao;
			}
		}
	}

	exibir(){
		image(this.imagem, this.posX, this.posY, this.raioA, this.raioL);
	}
}