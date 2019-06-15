function preload() {
	//Fontes
	fonteTitulo = 			loadFont('fontes/tw-cen-mt.ttf');
	fonteConteudo = 		loadFont('fontes/century-gothic.ttf');
	fonteConteudoBold = 	loadFont('fontes/century-gothic-bold.otf');

	// Logos
	logoUfc = 				loadImage('imagens/logos/logo-ufc.png');
	logoSMD = 				loadImage('imagens/logos/logo-smd.png');
	logoParque = 			loadImage('imagens/logos/logo-parque.png');
	logoEquipe = 			loadImage('imagens/logos/logo-libertinos.png');

	// Tela Inicial
	iconeInicio = 			loadImage('imagens/tela_mapa/icones/icone-inicio.png');
	iconeBiodiversidade = 	loadImage('imagens/tela_mapa/icones/icone-biodiversidade.png');
	iconeContato = 			loadImage('imagens/tela_mapa/icones/icone-contato.png');
	iconePreserv = 			loadImage('imagens/tela_mapa/icones/icone-preservacao.png');
	fundoMenu = 			loadImage('imagens/tela_mapa/menu.png');
	fundoExibicao = 		loadImage('imagens/tela_mapa/exibicao.png');
	imgSombraExibicao = 	loadImage('imagens/tela_mapa/sombraExibicao.png');
	posMascote = 			loadImage('imagens/tela_mapa/mascote.png');
	mapa = 					loadImage('imagens/tela_mapa/mapa.png');
	
	// Tela Contatos
	fundoAzul = 			loadImage('imagens/tela_contatos/contatoAzul.png');
	imgSombraContatoAzul = 	loadImage('imagens/tela_contatos/sombraContatoAzul.png');
	fundoAmarelo = 			loadImage('imagens/tela_contatos/contatoAmarelo.png');
	fundoVerde = 			loadImage('imagens/tela_contatos/contatoVerde.png');
	imgSombraHorizontal = 	loadImage('imagens/tela_contatos/sombraContatoHorizontal.png');
	elipseContato = 		loadImage('imagens/tela_contatos/elipseContato.png');
	linhasContato = 		loadImage('imagens/tela_contatos/linhasContato.png');
	linhasCurtas = 			loadImage('imagens/tela_contatos/linhasCurtas.png');
	linhasLongas = 			loadImage('imagens/tela_contatos/linhasLongas.png');

	// Tela Biodiversidade
	elipseBio = 			loadImage('imagens/tela_biodiversidade/elipseBio.png');
	tituloBio = 			loadImage('imagens/tela_biodiversidade/tituloBio.png');
	corpoBio = 				loadImage('imagens/tela_biodiversidade/corpoBio.png');

	// Tela Preservacao
	ellipseAmarela = 		loadImage('imagens/tela_preservacao/ellipseAmarela.png');
	ellipseVerde = 			loadImage('imagens/tela_preservacao/ellipseVerde.png');
	ellipseRosa = 			loadImage('imagens/tela_preservacao/ellipseRosa.png');

	//Ícones Básicos Globais
	iconeVoltar = 			loadImage('imagens/icones/icone-voltar.png');
	iconeConstrucao = 		loadImage('imagens/icones/icone-construcao.png'); //(Temporário)
	
	//Fotos
	galoCampina = 			loadImage('imagens/fotos/galo-campina.jpg');
	iguana = 				loadImage('imagens/fotos/iguana.jpg');
	sapoBoi = 				loadImage('imagens/fotos/sapo-boi.jpg');
	gato = 					loadImage('imagens/fotos/gato.jpg');	

	// Fundos dos cartões
	fundoPassaro = 			loadImage('imagens/fundos/fundo-passaro.png');
	fundoIguana = 			loadImage('imagens/fundos/fundo-iguana.png');
	fundoGato = 			loadImage('imagens/fundos/fundo-gato.png');
	fundoSapo = 			loadImage('imagens/fundos/fundo-sapo.png');
}

// Declaração de strings de texto para os cartões
// Ave
let texto1_ave='Paroaria dominicana';
let texto2_ave = 'Um dos pássaros mais típicos do interior do Nordeste do Brasil.';
let texto3_ave = 'Aprende a comer em comedouros artificiais e pode se tornar muito dócil quando acostumado.';
// Réptil
let texto1_reptil='Iguana iguana';
let texto2_reptil='Vivem em árvores, podendo atingir até 1,8m de comprimento.';
let texto3_reptil='Quando jovens, os iguanas possuem uma coloração verde intensa.';
// Anfíbio
let texto1_sapo='Rhinella marina';
let texto2_sapo='É um animal fértil devido ao grande número de ovos postos pelas fêmeas.';
let texto3_sapo='O sapo-cururu possui grandes glândulas de veneno. Tanto os adultos como os girinos são altamente tóxicos quando ingeridos.'
// Gatos
let texto1_gato='Os gatos hoje fazem parte da segunda maior causa de perda de biodiversidade do planeta.';
let texto2_gato='Nós, humanos, somos os maiores responsáveis por conta do abandono constante de gatos nas ruas.';
let texto3_gato='Cada gato, no sistema urbano, preda uma média de cinco animais silvestres por mês.';
