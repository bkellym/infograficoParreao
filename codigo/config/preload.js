var cardsEspeciesT = [];
var cardsParqueT = [];
var cardsPreservT = [];

function preload() {
	//Fontes
	fonteTitulo = 			loadFont('fontes/oswald-bold.ttf');
	fonteConteudo = 		loadFont('fontes/montserrat-regular.ttf');
	fonteConteudoBold = 	loadFont('fontes/montserrat-bold.ttf');

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
	fundoAmarelo = 			loadImage('imagens/tela_contatos/contatoAmarelo1.png');
	fundoVerde = 			loadImage('imagens/tela_contatos/contatoVerde.png');
	imgSombraHorizontal = 	loadImage('imagens/tela_contatos/sombraContatoHorizontal.png');

	elipseContato = 		loadImage('imagens/tela_contatos/elipseContato.png');
	mascoteAtende =			loadImage('imagens/tela_contatos/mascote-atendente.png');

	linhasContato = 		loadImage('imagens/tela_contatos/linhasContato.png');
	linhasTelefone = 		loadImage('imagens/tela_contatos/linhasTelefone.png');
	linhasInstagram =		loadImage('imagens/tela_contatos/linhasInstagram.png');
	linhasProParreao =		loadImage('imagens/tela_contatos/linhasProParreao.png');
	//fotoParque = 			loadImage('imagens/tela_contatos/parque.png');
	linhasCurtas = 			loadImage('imagens/tela_contatos/linhasCurtas.png');

	// Tela Biodiversidade
	elipseBio = 			loadImage('imagens/tela_biodiversidade/elipseBio.png');
	tituloBio1 = 			loadImage('imagens/tela_biodiversidade/tituloBio1.png');
	tituloBio2 = 			loadImage('imagens/tela_biodiversidade/tituloBio2.png');
	
	// arrays dos cards
	
	for (var a=0; a<11; a++) {
		cardsEspeciesT.push(loadImage('imagens/cartoes/cards_especies/card'+a+'.png'));
	}
	
	
	for (var b=0; b<5; b++) {
		cardsParqueT.push(loadImage('imagens/cartoes/cards_parque/card'+b+'.png'));
	}

	
	for (var c=0; c<4; c++) {
		cardsPreservT.push(loadImage('imagens/cartoes/cards_preserv/card'+c+'.png'));
	}
	// navegação cards
	paraDireita = 			loadImage('imagens/tela_biodiversidade/icone-passar-esq.png');
	paraEsquerda = 			loadImage('imagens/tela_biodiversidade/icone-passar-dir.png');
	corpoBio = 				loadImage('imagens/tela_biodiversidade/corpoBio.png');

	// Tela Preservacao
	tituloPreserv = 		loadImage('imagens/tela_preservacao/título.png'); // Título

	mascoteFrente =			loadImage('imagens/tela_preservacao/mascote-frente.png');

	ellipseAmarela = 		loadImage('imagens/tela_preservacao/ellipseAmarela.png'); // Ao redor
	primeiraElipse = 		loadImage('imagens/tela_preservacao/primeira-elipse.png');
	segundaElipse = 		loadImage('imagens/tela_preservacao/segunda-elipse.png');
	terceiraElipse = 		loadImage('imagens/tela_preservacao/terceira-elipse.png');
	quartaElipse = 			loadImage('imagens/tela_preservacao/quarta-elipse.png');
	quintaElipse = 			loadImage('imagens/tela_preservacao/quinta-elipse.png');

	ellipseVerde = 			loadImage('imagens/tela_preservacao/ellipseVerde.png'); // Centro

	ellipseRosa = 			loadImage('imagens/tela_preservacao/ellipseRosa.png'); // Gatos
	elipseGatos =			loadImage('imagens/tela_preservacao/elipse-gatos.png')
	
	//Ícones Básicos Globais
	iconeVoltar = 			loadImage('imagens/icones/icone-voltar.png');
	iconeConstrucao = 		loadImage('imagens/icones/icone-construcao.png'); //(Temporário)
	
}

// Textos tela Preservacao
let textoPreserv = [];
textoPreserv.push("A reciclagem é uma forma de produzir e criar coisas novas a partir de materiais que consideramos “inúteis” e provavelmente descartaríamos.");
textoPreserv.push("O processo de reciclagem é uma solução importantíssima para diminuir a quantidade de lixo no meio ambiente.");
textoPreserv.push("A coleta seletiva facilita o processo de reciclagem. Jogue o seu lixo na lixeira apropriada para ele.");
textoPreserv.push("Busque sempre jogar o lixo nas lixeiras que estão espalhadas pelo parque.");
textoPreserv.push("Evite poluir o parque, em vista de impedir que os animais acabem se alimentando com o lixo.");

// Textos área de exibição tela
let textoHoverInicial = "Olá! Seja bem-vindo ao Infográfico Pró-Parreão I. Eu serei o seu guia! Clique nos elementos do mapa para conhecer mais do parque. Ou, no menu acima, clique na opção de sua escolha!"
let textoHoverBiodiv  = "Nesta opção você conhecerá mais das espécies que, assim como eu, habitam o parque!"
let textoHoverContato = "Saiba mais sobre o funcionamento do parque e como entrar em contato com o projeto que cuida dele."
let textoHoverPreserv = "Aqui você saberá mais sobre como ajudar a preservar o parque e as espécies que, assim como eu, vivem aqui!"
let textoHoverHome 	  = "Neste botão você volta para cá!"