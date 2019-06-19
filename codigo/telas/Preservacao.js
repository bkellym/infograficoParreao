class TelaPreservacao{

	constructor(){
		this.menu = new Menu();

		this.raioBase = 3.84;

		this.raio = [width/(this.raioBase + (1 * 1.1)),
					 width/(this.raioBase + (2 * 1.1)),
					 width/(this.raioBase + (3 * 1.1)),
					 width/(this.raioBase + (4 * 1.1)),
					 width/(this.raioBase + (5 * 1.1))]

		this.titulo = new Objetos(tituloPreserv, width/6, height/4, (5*width)/16, (5*height)/36);

		this.mascote = new Objetos(mascoteFrente, width/4, height/2, this.raio[3], this.raio[3]);

		this.objEllipseVerde = new Objetos(ellipseVerde, width/2, height/2, width/3.5, width/3.5);

		this.distCentro = (this.objEllipseVerde.raioABase/2);

		this.objEllipseAm = [];

		this.objEllipseAm.push(new Objetos(	primeiraElipse,
											(width/2) - ((this.distCentro + this.raio[0]/2.5)) * cos(radians(120)),
											(height/2) - ((this.distCentro + this.raio[0]/2.5)) * sin(radians(120)),
											this.raio[0],
											this.raio[0]));

		this.objEllipseAm.push(new Objetos(	segundaElipse,
											(width/2) - ((this.distCentro + this.raio[1]/2.5)) * cos(radians(170)),
											(height/2) - ((this.distCentro + this.raio[1]/2.5)) * sin(radians(170)),
											this.raio[1],
											this.raio[1]));

		this.objEllipseAm.push(new Objetos(	terceiraElipse,
											(width/2) - ((this.distCentro + this.raio[2]/2.5)) * cos(radians(215)),
											(height/2) - ((this.distCentro + this.raio[2]/2.5)) * sin(radians(215)),
											this.raio[2],
											this.raio[2]));

		this.objEllipseAm.push(new Objetos(	quartaElipse,
											(width/2) - ((this.distCentro + this.raio[3]/2.5)) * cos(radians(260)),
											(height/2) - ((this.distCentro + this.raio[3]/2.5)) * sin(radians(260)),
											this.raio[3],
											this.raio[3]));

		this.objEllipseAm.push(new Objetos(	quintaElipse,
											(width/2) - ((this.distCentro + this.raio[4]/2.5)) * cos(radians(300)),
											(height/2) - ((this.distCentro + this.raio[4]/2.5)) * sin(radians(300)),
											this.raio[4],
											this.raio[4]));

		this.objEllipseRosa = new Objetos(elipseGatos, width/1.07, height/9, width/13.24, width/13.24);
	}

	exibir(){
		background('#6CCBFF');

		this.titulo.exibir();

		this.mascote.exibir();

		this.objEllipseVerde.exibir();

		for(let i = 0; i < 5; i++){
			this.objEllipseAm[i].exibir();
			this.objEllipseAm[i].interacaoHoverEllipse();
			this.objEllipseAm[i].interacaoHoverTextoPreservacao(textoPreserv[i]);
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