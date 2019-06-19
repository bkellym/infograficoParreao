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

	// Tela Biodiversidade
	elipseBio = 			loadImage('imagens/tela_biodiversidade/elipseBio.png');
	tituloBio = 			loadImage('imagens/tela_biodiversidade/tituloBio.png');
	cardsParque = [];
	//cardsParque = loadImage();
	cardsEspecies = [];
	//cardsEspecies = loadImage();
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

// Textos tela Preservacao
let textoPreserv = [];
textoPreserv.push("Sets the cursor to a predefined symbol or an image, or makes it visible if already hidden. If you are trying to set an image as the cursor, the recommended size is 16x16 or 32x32 pixels. The values for parameters x and y must be less than the dimensions of the image.");