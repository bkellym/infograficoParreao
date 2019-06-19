class TelaPreservacao{

	constructor(){
		this.menu = new Menu();

		this.raioBase = 3.84;

		this.raio = [width/(this.raioBase + (1 * 1.1)),
					 width/(this.raioBase + (2 * 1.1)),
					 width/(this.raioBase + (3 * 1.1)),
					 width/(this.raioBase + (4 * 1.1)),
					 width/(this.raioBase + (5 * 1.1))]

		this.objEllipseVerde = new Objetos(ellipseVerde, width/2, height/2.4, width/3.5, width/3.5);

		this.distCentro = (this.objEllipseVerde.raioABase/2);

		this.objEllipseAm = [];

		this.objEllipseAm.push(new Objetos(	ellipseAmarela,
											(width/2) - ((this.distCentro + this.raio[0]/2.5)) * cos(radians(30)),
											(height/2.4) - ((this.distCentro + this.raio[0]/2.5)) * sin(radians(30)),
											this.raio[0],
											this.raio[0]));

		this.objEllipseAm.push(new Objetos(	ellipseAmarela,
											(width/2) - ((this.distCentro + this.raio[1]/2.5)) * cos(radians(330)),
											(height/2.4) - ((this.distCentro + this.raio[1]/2.5)) * sin(radians(330)),
											this.raio[1],
											this.raio[1]));

		this.objEllipseAm.push(new Objetos(	ellipseAmarela,
											(width/2) - ((this.distCentro + this.raio[2]/2.5)) * cos(radians(280)),
											(height/2.4) - ((this.distCentro + this.raio[2]/2.5)) * sin(radians(280)),
											this.raio[2],
											this.raio[2]));

		this.objEllipseAm.push(new Objetos(	ellipseAmarela,
											(width/2) - ((this.distCentro + this.raio[3]/2.5)) * cos(radians(235)),
											(height/2.4) - ((this.distCentro + this.raio[3]/2.5)) * sin(radians(235)),
											this.raio[3],
											this.raio[3]));

		this.objEllipseAm.push(new Objetos(	ellipseAmarela,
											(width/2) - ((this.distCentro + this.raio[4]/2.5)) * cos(radians(190)),
											(height/2.4) - ((this.distCentro + this.raio[4]/2.5)) * sin(radians(190)),
											this.raio[4],
											this.raio[4]));

		this.objEllipseRosa = new Objetos(ellipseRosa, width/1.07, height/9, width/13.24, width/13.24);
	}

	exibir(){
		background('#6CCBFF');

		this.objEllipseVerde.exibir();

		for(let i = 0; i < 5; i++){
			this.objEllipseAm[i].exibir();
			this.objEllipseAm[i].interacaoHoverEllipse();
		}

		for(let i = 0; i < 5; i++){
			if(i < 3)
				this.objEllipseAm[i].interacaoHoverBox(true);
			else
				this.objEllipseAm[i].interacaoHoverBox(false);
		}

		this.objEllipseRosa.exibir();
		this.objEllipseRosa.interacaoHoverEllipse();

		this.menu.exibir();

		if(this.menu.mouseHover || this.objEllipseRosa.hover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}