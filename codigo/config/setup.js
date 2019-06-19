//Declaração Telas
let telaSpash;
let telaSpash2;
let telaInicial;
let telaContato;
let telaBiodiversidade;
let telaPreservacao;

function setup(){
	createCanvas(windowWidth*0.99, (windowWidth*0.99) * 9/16);
	textAlign(CENTER, CENTER);
	imageMode(CENTER); 
	rectMode(CENTER);

	telaSpash = new TelaSpash(logoUfc, logoSMD, logoParque);
	telaSpash2 = new TelaSpash2(logoEquipe);
	telaInicial = new TelaInicial();
	telaContato = new TelaContato();
	telaBiodiversidade = new TelaBiodiversidade();
	telaPreservacao = new TelaPreservacao();
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}