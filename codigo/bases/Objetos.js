let timerHover = 0;

class Objetos {
	constructor(img, x, y, a, l){
		this.imagem = img;
		this.raioABase = a;
		this.raioLBase = l;
		this.posX = x;
		this.posY = y;

		this.rectTamLMax = this.raioABase*1.2;
		this.rectTamAMax = this.rectTamLMax/2;

		this.rectTamL = 0;
		this.rectTamA = 0;

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

	interacaoHoverBox(lado){
		if(lado == true){
			rect(this.posX - this.raioABase/2, this.posY + this.raioLBase/3, this.rectTamL, this.rectTamA, 25);	
		}
		else{
			rect(this.posX + this.raioABase/2, this.posY + this.raioLBase/3, this.rectTamL, this.rectTamA, 25);		
		}

		if(this.hoverMouse()){
			fill("#F2F2F2");
			noStroke();
			if(this.rectTamL < this.rectTamLMax){
				this.rectTamL+=this.rectTamLMax*0.2;
			}
			else{
				this.rectTamL = this.rectTamLMax;
			}

			if(this.rectTamA < this.rectTamAMax){
				this.rectTamA+=this.rectTamAMax*0.2;
			}
			else{
				this.rectTamA = this.rectTamAMax;
			}
			
		}else{
			if(this.rectTamL > this.rectTamLMax*0.2){
				this.rectTamL-=this.rectTamLMax*0.2;
			}
			else{
				this.rectTamL = 0;
			}

			if(this.rectTamA > this.rectTamAMax*0.2){
				this.rectTamA-=this.rectTamAMax*0.2;
			}
			else{
				this.rectTamA = 0;
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