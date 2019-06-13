class TelaSpash2 {

	constructor(img){
		this.logo_equipe = new Objetos(img, width/2, height/2, width/4, width/4);

		this.dev = new Texto("Desenvolvido por:", width/2, height * 0.15, 0, 40, fonteTitulo);
		this.equipe = new Texto("Libertinos", width/2, height * 0.8, 0, 40, fonteTitulo);
	}

	exibir(){
		this.logo_equipe.exibir();
		this.dev.exibir();
		this.equipe.exibir();
	}
}