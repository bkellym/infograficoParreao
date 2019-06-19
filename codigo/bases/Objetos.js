let timerHover = 0;

class Objetos {
	constructor(img, x, y, a, l){
		this.imagem = img;
		this.raioABase = a;
		this.raioLBase = l;
		this.posX = x;
		this.posY = y;

		this.textPreservTamLMax = width/5;
		this.textPreservTamAMax = width/5;

		this.textPreservTamL = 0;
		this.textPreservTamA = 0;

		this.hover = false;

		this.raioA = this.raioABase;
		this.raioL = this.raioLBase;

		this.tamanhoHover = this.raioABase * 0.15;
	}

	setXeY(x, y){
		this.posX = x;
		this.posY = y;
	}

	hoverMouse(){
		if(timerHover == 50){
			if(dist(mouseX, mouseY, this.posX, this.posY) <= this.raioABase/2){
				return true;
			}
			else{
				return false;
			}
		}

		timerHover++;

		if(timerHover == 51){
			timerHover = 0;
		}
	}

	hoverMouseRect(){
		if(timerHover == 50){
			if(mouseX <= this.posX + this.raioABase/2 &&
				mouseX >= this.posX - this.raioABase/2 &&
				mouseY <= this.posY + this.raioLBase/2 &&
				mouseY >= this.posY - this.raioLBase/2){
				return true;
			}
			else{
				return false;

			}
		}

		timerHover++;

		if(timerHover == 51){
			timerHover = 0;
		}
	}

	interacaoHoverEllipse(){
		if(this.hoverMouse()){
			this.raioA = this.raioABase + this.tamanhoHover;
			this.raioL = this.raioLBase + this.tamanhoHover;
			this.hover = true;
			return true;
		}else{
			this.raioA = this.raioABase;
			this.raioL = this.raioLBase;
			this.hover = false;
			return false;
		}
	}

	interacaoHoverTextoPreservacao(textPreserv){


		let textoCentroPreserv = new Texto(textPreserv, width/2, height/2, 0, 18, fonteConteudoBold);

		textoCentroPreserv.exibirInConteiner(this.textPreservTamL, this.textPreservTamA);

		if(this.hoverMouse()){
			fill("#F2F2F2");
			noStroke();
			if(this.textPreservTamL < this.textPreservTamLMax){
				this.textPreservTamL+=this.textPreservTamLMax*0.2;
			}
			else{
				this.textPreservTamL = this.textPreservTamLMax;
			}

			if(this.textPreservTamA < this.textPreservTamAMax){
				this.textPreservTamA+=this.textPreservTamAMax*0.2;
			}
			else{
				this.textPreservTamA = this.textPreservTamAMax;
			}
			
		}else{
			if(this.textPreservTamL > this.textPreservTamLMax*0.3){
				this.textPreservTamL-=this.textPreservTamLMax*0.3;
			}
			else{
				this.textPreservTamL = 0;
			}

			if(this.textPreservTamA > this.textPreservTamAMax*0.3){
				this.textPreservTamA-=this.textPreservTamAMax*0.3;
			}
			else{
				this.textPreservTamA = 0;
			}
		}
	}

	interacaoClicarTela(link){
		if(this.hoverMouse()){
			if(mouseIsPressed){
				window.open(link, "_self");
			}
		}
	}

	interacaoClicarRect(){
		if(this.hoverMouseRect()){
			if(mouseIsPressed){
				window.open(link);
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