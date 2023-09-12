let option = 5
do {   
option = parseInt(prompt("Selecione uma das opções:"+
"\n 1 - Comece o Jogo"+
"\n 2 - Pause o Jogo"+
"\n 3 - Salve o jogo"+
"\n 4 - Envie o jogo"+
"\n 5 - Encerrar"
));

switch (option) {
    case 1:
    alert("Você selecionou a opção: Comece o Jogo")    
        break;
    case 2:
    alert("Você selecionou a opção: Pause o Jogo")     
        break;
    case 3:
    alert("Você selecionou a opção: Salve o jogo")      
        break;
    case 4:
    alert("Você selecionou a opção: Envie o jogo")      
        break;
    case 5:
    alert("O sistema está sendo encerrado!")      
        break;
}
} while (option !== 5);
/*Escreva um programa em javascript que simule um menu interativo com 5 opções diferentes. O programa deverá iniciar mostrando as 5 opções disponíveis, as quatro primeiras não precisam de nenhuma funcionalidade específica, a última opção deve ser a opção “Encerrar”. Ao clicar em alguma das quatro primeiras opções uma mensagem deve ser exibida na tela indicando qual foi a opção escolhida e depois o programa deve exibir novamente o menu com as 5 opções. Isso deve continuar acontecendo até que o usuário escolha a opção “Encerrar”. Ao escolhe-la uma mensagem dizendo que o sistema está sendo encerrado deve ser exibida na tela e então o programa é finalizado.*/