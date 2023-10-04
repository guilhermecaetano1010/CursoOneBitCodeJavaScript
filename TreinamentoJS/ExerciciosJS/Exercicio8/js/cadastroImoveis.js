let escolha = "";
let imoveis = [];


do {

//     let imoveisCadastrados = "";
//     for (let i = 0; i < imoveis.length; i++) {
//         imoveisCadastrados +=  imoveis[i] + "\n";
//    }    
    // let nomeProp = ""
    // let quantidadeQuartos = ""
    // let numeroBanheiros = ""
    // let garagem = ""
    // let infoImovel = "";  O certo seria usar um objeto

    escolha = prompt("Número de imóveis cadastrados:\n"+imoveis.length+"\nEscolha a opção desejada:"+"\n1 - Salvar novo imóvel."+"\n2 - Ver todos os imóveis salvos."+"\n3 - Sair.")
    
    switch (escolha) {
        case "1":
   
        // nomeProp = prompt("Digite o nome do proprietário do imóvel: ");
        // quantidadeQuartos = prompt("Digite a quantidade de quartos do imóvel: ");
        // numeroBanheiros = prompt("Digite a quantidade de banheiros do imóvel: ");
        // garagem = prompt("Digite se o imóvel possui garagem (SIM/NAO): ");   
        //    infoImovel = ( 
        //     "Nome do proprietário: "+ nomeProp+
        //     "\nQuantidade de quartos: "+ quantidadeQuartos+
        //     "\nQuantidade de banheiros: "+ numeroBanheiros+
        //     "\nSe possui garagem: "+ garagem+"\n"
        //    );
        // imoveis.push(infoImovel);     O certo seria usar um objeto

        const imovel = {}

        imovel.proprietario = prompt("Informe o nome do proprietário do imóvel:");
        imovel.quartos = prompt("Quantos quartos possui o imóvel?");
        imovel.banheiros = prompt("Quantos banheiros possui o imóvel?");
        imovel.garagem = prompt("O imóvel possui garagem? (Sim/Não)");
  
        const confirma = confirm(
          "Salvar este imóvel?\n" +
          "\nProprietário: " + imovel.proprietario +
          "\nQuartos: " + imovel.quartos +
          "\nBanheiros: " + imovel.banheiros +
          "\nPossui Garagem? " + imovel.garagem
        )
        if (confirma) {
            imoveis.push(imovel);
            alert("Imóvel salvo com sucesso!");
          }
        else{
            alert("Voltando ao menu...")
        }

        break;

        case "2":
        if (!imoveis.length) {
            alert("Ainda não foi cadastrado nenhum imóvel!");
        }
        else{
            // alert(imoveisCadastrados); Do jeito que eu fiz sem objetos
 
                  for (let i = 0; i < imoveis.length; i++) {
                    alert(
                      "Imóvel " + (i + 1) +
                      "\nProprietário: " + imoveis[i].proprietario +
                      "\nQuartos: " + imoveis[i].quartos +
                      "\nBanheiros: " + imoveis[i].banheiros +
                      "\nPossui Garagem? " + imoveis[i].garagem
                    )
                  }

        }  
            break;

        case "3":
        alert("Encerrando o programa........");    
            break;
    
        default:
            alert("Opção inválida!!");
            break;
    }

} while (escolha !== "3");



/*## Cadastro de Imóveis

Escreva um programa em javascript que funcione como um cadastro de imóveis e atenda aos seguintes requisitos:

- Deve ter um menu interativo que sempre é exibido até que o usuário escolha sair.
- O menu interativo deve mostrar no topo a quantidade de imóveis cadastrados.
- O menu deve ter a opção de salvar um imóvel.
- Para salvar um novo imóvel o programa deve pedir as seguintes informações:
    - Nome do proprietário.
    - Quantidade de quartos.
    - Quantidade de banheiros.
    - Se possui garagem.
- O menu também deve ter a opção de mostrar todos os imóveis salvos. */