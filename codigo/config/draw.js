var tempoSplash = 0; // temporizador

var TELA = 0; // estado inicial

var EstadoSplashs = 0;
var EstadoTelaInicial = 1;
var EstadoTelaCategorias = 2;
var EstadoTelaContato = 3;
var EstadoTelaPreservacao = 4;

var CARTAO = 0;

var EstadoCartaoAve = 1;
var EstadoCartaoReptil = 2;
var EstadoCartaoAnfibio = 3;
var EstadoCartaoGato = 4;

var alpha = 0;

function draw(){
	background(240);
	maquinaEstadoTelas();
	maquinaEstadoCartao();
}

function maquinaEstadoTelas(){
	switch(TELA){
		case EstadoSplashs:
			if(tempoSplash <= 90){
				telaSpash.exibir();
				alpha = 0;
			} else if(tempoSplash > 90 && tempoSplash <= 120){
				telaSpash.exibir();
				alpha += 8;
			} else if(tempoSplash > 120 && tempoSplash <= 180) {
				telaSpash2.exibir();
				alpha = 0;
			} else if(tempoSplash > 180 && tempoSplash <= 210) {
				telaSpash2.exibir();
				alpha += 8;
			}
			else {
				TELA = EstadoTelaInicial;
			}

			fill(240, 240, 240, alpha);
			rect(width/2, height/2, width, height);

			noStroke();
			fill(87, 204, 242, 40);
			rect(width/2, height * 0.9, width * 0.2, height * 0.05, 10);
			fill(0);
			textFont(fonteConteudo);
			textSize(15);
			text("Carregando...", width/2,  height * 0.9);

			tempoSplash++;
			break;
		case EstadoTelaInicial:
			telaInicial.exibir();
			break;
		case EstadoTelaCategorias:
			telaCategorias.exibir();
			break;
		case EstadoTelaContato:
			telaConstrucao.exibir();
			break;
		case EstadoTelaPreservacao:
			cartaoAnimal.exibir();
			break;
	}
}

function maquinaEstadoCartao(){
	if(TELA == EstadoTelaCategorias){
		switch(CARTAO){
			case EstadoCartaoAve:
				cartaoAve.exibir();
				break;
			case EstadoCartaoReptil:
				cartaoReptil.exibir();
				break;
			case EstadoCartaoAnfibio:
				cartaoAnfibio.exibir();
				break;
			case EstadoCartaoGato:
				cartaoGato.exibir();
				break;
		}
	}
	else{
		CARTAO = 0;
	}
}