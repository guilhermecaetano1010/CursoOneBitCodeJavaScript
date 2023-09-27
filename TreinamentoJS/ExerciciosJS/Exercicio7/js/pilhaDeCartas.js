/*Escreva um programa em javascript para simular um baralho de cartas. O programa deve iniciar mostrando na tela um menu interativo contendo a quantidade de cartas que estão atualmente no baralho e as opções de “Adicionar uma carta”, “Puxar uma carta” e “Sair”. Ao escolher “Adicionar uma carta”, o programa deve perguntar o nome da carta e adicioná-la no topo do baralho. Ao escolher “Puxar uma carta”, o programa deve retirar a carta do topo do baralho e mostrar na tela o nome da carta puxada. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/

let arr = ["A - Copas", " A - Espadas", " 2 - Ouros", " 3 - Espadas"]
alert(arr);
let carta;
let escolha;
while (escolha !==3 ) {

    escolha = parseInt(prompt("1 - Adicionar uma carta"+"\n2 - Puxar uma carta"+"\n3 - Sair"));
    switch (escolha) {
        case 1:
        carta = arr.unshift(" "+prompt("Digite a carta que deseja colocar no baralho como, por exemplo, (Q - Ouros):"))
        alert(arr);
            break;
        case 2:
        carta = arr.shift();
        alert(carta);   
            break;
        case 3:
            escolha = 3;
            break;
    }
    
}