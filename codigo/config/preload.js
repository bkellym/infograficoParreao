function preload() {
	//Fontes
	fonteTitulo = loadFont('fontes/tw-cen-mt.ttf');
	fonteConteudo = loadFont('fontes/century-gothic.ttf');
	fonteConteudoBold = loadFont('fontes/century-gothic-bold.otf');

	// Logos
	logoUfc = loadImage('imagens/logos/logo-ufc.png');
	logoSMD = loadImage('imagens/logos/logo-smd.png');
	logoParque = loadImage('imagens/logos/logo-parque.png');
	logoEquipe = loadImage('imagens/logos/logo-libertinos.png');

	// Ícones Tela Inicial
	iconeMapa = loadImage('imagens/icones/icone-mapa.png');
	iconeContato = loadImage('imagens/icones/icone-contato.png');
	iconePassaro = loadImage('imagens/icones/icone-passaro.png');
	iconePreserv = loadImage('imagens/icones/icone-preservacao.png');
	fundoMenu = loadImage('imagens/icones/Menu.png');
	fundoExibicao = loadImage('imagens/exibicao.png');
	imgMascote = loadImage('imagens/mascote.png');
	
	// Ícones Tela Contatos
	fundoAzul = loadImage('imagens/fundos/contatoAzul.png');
	fundoAmarelo = loadImage('imagens/fundos/contatoAmarelo.png');
	fundoVerde = loadImage('imagens/fundos/contatoVerde.png');
	elipseContato = loadImage('imagens/elipseContato.png');
	linhasContato = loadImage('imagens/linhasContato.png');
	linhasCurtas = loadImage('imagens/linhasCurtas.png');
	linhasLongas = loadImage('imagens/linhasLongas.png');

	// Ícones Biodiversidade
	elipseBio = loadImage('imagens/elipseBio.png');
	tituloBio = loadImage('imagens/tituloBio.png');
	corpoBio = loadImage('imagens/corpoBio.png');

	//Ícones Básicos Globais (Temporário)
	iconeVoltar = loadImage('imagens/icones/icone-voltar.png');
	iconeConstrucao = loadImage('imagens/icones/icone-construcao.png');
	
	//Fotos
	galoCampina = loadImage('imagens/fotos/galo-campina.jpg');
	iguana = loadImage('imagens/fotos/iguana.jpg');
	sapoBoi = loadImage('imagens/fotos/sapo-boi.jpg');
	gato = loadImage('imagens/fotos/gato.jpg');

	//Mapa
	mapa = loadImage('imagens/mapa.png');

	// Fundos dos cartões
	fundoPassaro = loadImage('imagens/fundos/fundo-passaro.png');
	fundoIguana = loadImage('imagens/fundos/fundo-iguana.png');
	fundoGato = loadImage('imagens/fundos/fundo-gato.png');
	fundoSapo = loadImage('imagens/fundos/fundo-sapo.png');
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
