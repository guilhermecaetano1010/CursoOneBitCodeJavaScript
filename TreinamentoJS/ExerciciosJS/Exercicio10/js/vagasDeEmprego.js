const vagas = []

function listarVagas() {
    const vagasEmTexto = vagas.reduce(function (textoFinal, vaga, indice){
        // 1. nome, (x candidatos)
        textoFinal += indice + ". "
        textoFinal += vaga.nome
        textoFinal += " (" + vaga.candidatos.length + " candidatos)\n"
        return textoFinal
    }, "")

    alert(vagasEmTexto)
}

function novaVaga() {
    const nome = prompt("Informe um nome para a vaga:")
    const descricao = prompt("Informe uma descrição para a vaga:")
    const dataLimite = prompt("Informe uma data limite (dd/mm/aaaa) para a vaga:")

    const confirmacao = confirm(
        "Deseja criar uma nova vaga com essas informações?\n" + 
        "Nome: " + nome + "\nDescrição: " + descricao + "\nData limite: " + dataLimite
    )

    if (confirmacao) {
        const novaVaga = {nome, descricao, dataLimite, candidatos: [] }
        vagas.push(novaVaga)
        alert("Vaga criada.")
    }
}

function exibirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja exibir:")
    if(indice >= vagas.length || indice < 0){
       alert("Índice inválido")
       return
    }
    const vaga = vagas[indice]

    const candidatoEmTexto = vaga.candidatos.reduce(function (textoFinal, candidato) {
        return textoFinal + "\n - " + candidato
    }, "")

    alert(
        "Vaga nº " + indice + 
        "\nNome: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData limite: " + vaga.dataLimite +
        "\nQuantidade de candidatos: " + vaga.candidatos.length +
        "\nCandidatos inscritos: " + candidatoEmTexto 
    )
}

function inscreverCandidato() {
    const candidato = prompt("Informe o nome do(a) candidato(a):")
    const indice = prompt("Informe o índice da vaga para a qual o(a) candidato(a) deseja se inscrever:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
        "Deseja inscrever o candidato "+ candidato + " na vaga " + indice + "?\n" + 
        "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite 
    )
    if (confirmacao) {
        vaga.candidatos.push(candidato)
        alert("Inscrição realizada.")
    }
}


function excluirVaga() {
    const indice = prompt("Informe o índice da vaga que deseja excluir:")
    const vaga = vagas[indice]

    const confirmacao = confirm(
    "Tem certeza que deseja excluir a vaga "+ indice + "?\n" +
    "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData limite: " + vaga.dataLimite 
    )

    if (confirmacao) {
        vagas.splice(indice, 1)
        alert("Vaga excluída.")
    }
}

function exibirMenu() {
    const opcao = prompt(
        "Cadastro de Vagas de Emprego" +
        "\n\n Escolha uma das opções:" +
        "\n1. Listar vagas disponíveis" + 
        "\n2. Criar uma nova vaga" + 
        "\n3. Visualizar uma vaga" + 
        "\n4. Inscrever um(a) candidato(a)" + 
        "\n5. Excluir uma vaga" + 
        "\n6. Sair" 
    )
    return opcao
}


function executar() {
    let opcao = ""

    do {
        opcao = exibirMenu()

        switch (opcao) {
            case "1":
                listarVagas()    
                break;
            case "2":
                novaVaga()
                break;
            case "3":
                exibirVaga()   
                break;
            case "4":
                inscreverCandidato()
                break;
            case "5":
                excluirVaga()
                break;
            case "6":
                alert("Saindo...")   
                break;
        
            default:
                alert("Opção inválida.")
                break;
        }
    } while (opcao !== "6");
}

executar()

















//Como eu fiz o exercício 10


// function exibirMenu() {
//     return parseInt(prompt("Escolha uma das opções: " +
//         "\n1 - Listar vagas disponíveis" +
//         "\n2 - Criar uma nova vaga" +
//         "\n3 - Visualizar uma vaga" +
//         "\n4 - Inscrever um candidato em uma vaga" +
//         "\n5 - Excluir uma vaga" +
//         "\n6 - Sair"
//     ))
// }

// let vagas = [];

// let listarVagas = function () {
//     let todasVagas = "";
//     for (let i = 0; i < vagas.length; i++) {
//         let vaga = vagas[i];
//         todasVagas += "Índice: "+ i + ", Nome: " + vaga.nome;
        
//         if (vaga.candidatos && vaga.candidatos.length > 0) {
//             todasVagas += ", Candidatos: " + vaga.candidatos.length;
//         } else {
//             todasVagas += ", Sem candidatos";
//         }

//         todasVagas += "\n";
//     }
//     alert(todasVagas);
// }

// let criarVaga = function (nome, descricao, dataLimite) {
//     let novaVaga = { nome, descricao, dataLimite, candidatos: [] };
//     vagas.push(novaVaga);
// }

// let visualizarVaga = function (indice) {
//     let vaga = vagas[indice];
//     let infoVaga = "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite;

//     if (vaga.candidatos && vaga.candidatos.length > 0) {
//         infoVaga += "\nCandidatos: ";
//         for (let i = 0; i < vaga.candidatos.length; i++) {
//             infoVaga += vaga.candidatos[i] + ", ";
//         }

//         infoVaga = infoVaga.slice(0, -2);

//         infoVaga += "\nQuantidade de Candidatos: " + vaga.candidatos.length;
//     } else {
//         infoVaga += "\nSem candidatos";
//     }

//     alert(infoVaga);
// }

// function excluirVaga(indice) {
//     let confirmacao = prompt(vagas[indice].nome + "\nDeseja excluir? SIM / NAO");
//     if (confirmacao.toUpperCase() === "SIM") {
//         vagas.splice(indice, 1);
//         alert("Vaga excluída com sucesso!");
//     }
// }

// let inscreverCandidato = function (nome, indice) {
//     let vaga = vagas[indice];
//     let confirmacao = prompt(
//         "Nome da vaga: " + vaga.nome +
//         "\nDescrição: " + vaga.descricao +
//         "\nData Limite: " + vaga.dataLimite +
//         "\nDeseja se inscrever nesta vaga? SIM / NAO"
//     );

//     if (confirmacao.toUpperCase() === "SIM") {
//         vaga.candidatos.push(nome);
//         alert("Candidato inscrito com sucesso!");
//     } else {
//         alert("Inscrição cancelada.");
//     }
// }

// function executar() {
//     let opcao = 0;
//     do {
//         opcao = exibirMenu();

//         let indice;
//         switch (opcao) {
//             case 1:
//                 listarVagas();
//                 break;
//             case 2:
//                 let nome = prompt("Digite o nome da vaga: ");
//                 let descricao = prompt("Digite a descrição da vaga: ");
//                 let dataLimite = prompt("Digite a data limite: ");
//                 let confirmacao = prompt("Nome da vaga: " + nome +
//                     "\nDescrição: " + descricao + "\nData limite: " + dataLimite + "\nDeseja salvar? SIM / NAO");
//                 if (confirmacao.toUpperCase() === "SIM") {
//                     criarVaga(nome, descricao, dataLimite);
//                 }
//                 break;
//             case 3:
//                 indice = prompt("Digite o índice da vaga: ");
//                 visualizarVaga(indice);
//                 break;
//             case 4:
//                 let nomeCandidato = prompt("Digite o seu nome: ");
//                 indice = prompt("Digite o índice da vaga: ");
//                 inscreverCandidato(nomeCandidato, indice);
//                 break;
//             case 5:
//                 indice = prompt("Digite o índice da vaga: ");
//                 excluirVaga(indice);
//                 break;
//             case 6:
//                 alert("Encerrando programa ...");
//                 break;
//             default:
//                 alert("O número digitado é inválido!");
//                 break;
//         }

//     } while (opcao !== 6);
// }

// executar();