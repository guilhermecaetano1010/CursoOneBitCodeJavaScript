
let quantInicial;
quantInicial = parseFloat(prompt("Digite a quantia de dinheiro inicial:"));
do {
sair = prompt("Sua quantidade de dinheiro inicial é R$ "+ quantInicial.toFixed(2)+ " como deseja prosseguir: "+
"\n 1 - Adicionar dinheiro"+
"\n 2 - Remover dinheiro"+
"\n 3 - Sair");

let dinheiro;

switch (sair) {
    case "1":
        dinheiro = parseFloat(prompt("Digite a quantia de dinheiro que deseja adicionar:"));
        quantInicial+= dinheiro; 
        break;
    case "2":
        dinheiro = parseFloat(prompt("Digite a quantia de dinheiro que deseja remover:"));
        quantInicial-= dinheiro; 
        break;

}
} while (sair!=="3");

/*Escreva um programa em javascript que comece perguntando pela quantidade inicial de dinheiro disponível e então mostre na tela essa quantidade juntamente com as opções de adicionar e remover dinheiro e uma opção de sair. Ao clicar na opção de adicionar dinheiro o programa deve perguntar pela quantidade a ser adicionada, somar esse valor com a quantidade inicial e então mostrar novamente o menu com a quantidade de dinheiro e as opções. A opção de remover dinheiro deve fazer o mesmo, porém subtraindo o valor. A opção de sair deve encerrar o programa.*/