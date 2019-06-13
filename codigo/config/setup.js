//Declaração Telas
let telaSpash;
let telaSpash2;
let telaInicial;
let telaCategorias;
let telaConstrucao;

//Declaracão Cartões
let cartaoAve;
let cartaoReptil;
let cartaoAnfibio;
let cartaoGato;

function setup(){
	createCanvas(windowWidth, windowHeight);
	textAlign(CENTER, CENTER);
	imageMode(CENTER); 
	rectMode(CENTER);

	telaSpash = new TelaSpash(logoUfc, logoSMD, logoParque);
	telaSpash2 = new TelaSpash2(logoEquipe);
	telaInicial = new TelaInicial(iconeContato, iconePassaro, iconeGMaps);
	telaCategorias = new Categorias(iconeRepteis, iconeAves, iconeAnfibios, iconePreserv, iconeVoltar);
	telaConstrucao = new TelaConstrucao(iconeConstrucao, iconeVoltar);
	cartaoAve = new CartaoAnimal(iconeVoltar, '#57CCF2', galoCampina, fundoPassaro, 'Galo-de-campina', texto1_ave, texto2_ave, texto3_ave);
	cartaoReptil = new CartaoAnimal(iconeVoltar, '#E89F54', iguana, fundoIguana, 'Iguana-verde', texto1_reptil, texto2_reptil, texto3_reptil);
	cartaoAnfibio = new CartaoAnimal(iconeVoltar, '#5ADB6B', sapoBoi, fundoSapo, 'Sapo-cururu', texto1_sapo, texto2_sapo, texto3_sapo);
	cartaoGato = new CartaoAnimal(iconeVoltar, '#BF2121', gato, fundoGato, 'Gatos e seus riscos', texto1_gato, texto2_gato, texto3_gato);
}