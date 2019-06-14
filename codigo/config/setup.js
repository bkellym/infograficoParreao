//Declaração Telas
let telaSpash;
let telaSpash2;
let telaInicial;
let telaContato;

function setup(){
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	imageMode(CENTER); 
	rectMode(CENTER);

	telaSpash = new TelaSpash(logoUfc, logoSMD, logoParque);
	telaSpash2 = new TelaSpash2(logoEquipe);
	telaInicial = new TelaInicial();
	telaContato = new TelaContato();
	telaBiodiversidade = new TelaBiodiversidade();
}