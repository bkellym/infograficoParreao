class TelaBiodiversidade{

	constructor(){

		this.menu = new Menu();

		this.objElipseBio = new Objetos(elipseBio, width/3.8, height/2, width/2.2, width/2.2);

		this.objTituloBio1 = new Objetos(tituloBio, width/1.6, height/6.4, width/4.8, (width/4.8) * 0.2);
		this.objTituloBio2 = new Objetos(tituloBio, width/1.15, height/6.4, width/4.8, (width/4.8) * 0.2);

		this.objCorpoBio1 = new Objetos(corpoBio, width/1.6, height/1.7, width/4.7, (width/4.7) * 1.6);
		this.objCorpoBio2 = new Objetos(corpoBio, width/1.15, height/1.7, width/4.7, (width/4.7) * 1.6);
	}

	exibir(){
		background('#998533');

		this.objElipseBio.exibir();

		this.objTituloBio1.exibir();
		this.objTituloBio2.exibir();

		this.objCorpoBio1.exibir();
		this.objCorpoBio2.exibir();

		this.menu.exibir();

		if(this.menu.mouseHover){
			cursor(HAND);
		}
		else{
			cursor(ARROW);
		}
	}
}