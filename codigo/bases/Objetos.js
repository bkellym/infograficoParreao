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

		this.textInicialTamLMax = (width/2.5) * 2/3;
		this.textInicialTamAMax = ((width/2.5) * 16/21) * 2/3;

		this.textInicialTamL = 0;
		this.textInicialTamA = 0;

		this.hover = false;

		this.raioA = this.raioABase;
		this.raioL = this.raioLBase;

		this.tamanhoHover = this.raioABase * 0.15;
		this.tamanhoHoverMenor = this.raioABase * 0.05;
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

	interacaoHoverRectCard(){
		if(this.hoverMouseRect()){
			this.raioA = this.raioABase + this.tamanhoHoverMenor;
			this.raioL = this.raioLBase + this.tamanhoHoverMenor;
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

	interacaoHoverTextoInicial(textTelaInicial){

		let textoCentroPreserv = new Texto(textTelaInicial, width/1.39, height/3.08, 0, 18, fonteConteudoBold);

		textoCentroPreserv.exibirInConteiner(this.textInicialTamL, this.textInicialTamL);

		if(this.hoverMouse()){
			fill("#F2F2F2");
			noStroke();
			if(this.textInicialTamL < this.textInicialTamLMax){
				this.textInicialTamL+=this.textInicialTamLMax*0.2;
			}
			else{
				this.textInicialTamL = this.textInicialTamLMax;
			}

			if(this.textInicialTamL < this.textInicialTamAMax){
				this.textInicialTamL+=this.textInicialTamAMax*0.2;
			}
			else{
				this.textInicialTamL = this.textInicialTamAMax;
			}
			
		}else{
			if(this.textInicialTamL > this.textInicialTamLMax*0.3){
				this.textInicialTamL-=this.textInicialTamLMax*0.3;
			}
			else{
				this.textInicialTamL = 0;
			}

			if(this.textInicialTamL > this.textInicialTamAMax*0.3){
				this.textInicialTamL-=this.textInicialTamAMax*0.3;
			}
			else{
				this.textInicialTamL = 0;
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

	interacaoEscolherCard(numero){
		if(this.hoverMouseRect()){
			if(mouseIsPressed){
				return numero;
			}
			else{
				return 0;
			}
		}
		return 0;
	}

	interacaoPassarCard(direcao){
		if(direcao){
			if(this.hoverMouseRect()){
				if(mouseIsPressed){
					return 1;
				}
				else{
					return 0;
				}
			}
			return 0;
		}
		else{
			if(this.hoverMouseRect()){
				if(mouseIsPressed){
					return -1;
				}
				else{
					return 0;
				}
			}
			return 0;
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

	exibirMoverEsquerda(valor){
		image(this.imagem, this.posX - valor, this.posY, this.raioA, this.raioL);
	}

	exibirTrazerDaDireita(valor){
		image(this.imagem, valor, this.posY, this.raioA, this.raioL);
	}

	exibirMoverDireita(valor){
		image(this.imagem, this.posX + valor, this.posY, this.raioA, this.raioL);
	}

	exibirTrazerDaEsquerda(valor){
		image(this.imagem, valor, this.posY, this.raioA, this.raioL);
	}
}