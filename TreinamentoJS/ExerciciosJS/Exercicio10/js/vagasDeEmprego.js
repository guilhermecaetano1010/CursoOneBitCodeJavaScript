function exibirMenu() {
    return parseInt(prompt("Escolha uma das opções: " +
        "\n1 - Listar vagas disponíveis" +
        "\n2 - Criar uma nova vaga" +
        "\n3 - Visualizar uma vaga" +
        "\n4 - Inscrever um candidato em uma vaga" +
        "\n5 - Excluir uma vaga" +
        "\n6 - Sair"
    ))
}

let vagas = [];

let listarVagas = function () {
    let todasVagas = "";
    for (let i = 0; i < vagas.length; i++) {
        let vaga = vagas[i];
        todasVagas += "Índice: "+ i + ", Nome: " + vaga.nome;
        
        if (vaga.candidatos && vaga.candidatos.length > 0) {
            todasVagas += ", Candidatos: " + vaga.candidatos.length;
        } else {
            todasVagas += ", Sem candidatos";
        }

        todasVagas += "\n";
    }
    alert(todasVagas);
}

let criarVaga = function (nome, descricao, dataLimite) {
    let novaVaga = { nome, descricao, dataLimite, candidatos: [] };
    vagas.push(novaVaga);
}

let visualizarVaga = function (indice) {
    let vaga = vagas[indice];
    let infoVaga = "Nome: " + vaga.nome + "\nDescrição: " + vaga.descricao + "\nData Limite: " + vaga.dataLimite;

    if (vaga.candidatos && vaga.candidatos.length > 0) {
        infoVaga += "\nCandidatos: ";
        for (let i = 0; i < vaga.candidatos.length; i++) {
            infoVaga += vaga.candidatos[i] + ", ";
        }

        infoVaga = infoVaga.slice(0, -2);

        infoVaga += "\nQuantidade de Candidatos: " + vaga.candidatos.length;
    } else {
        infoVaga += "\nSem candidatos";
    }

    alert(infoVaga);
}

function excluirVaga(indice) {
    let confirmacao = prompt(vagas[indice].nome + "\nDeseja excluir? SIM / NAO");
    if (confirmacao.toUpperCase() === "SIM") {
        vagas.splice(indice, 1);
        alert("Vaga excluída com sucesso!");
    }
}

let inscreverCandidato = function (nome, indice) {
    let vaga = vagas[indice];
    let confirmacao = prompt(
        "Nome da vaga: " + vaga.nome +
        "\nDescrição: " + vaga.descricao +
        "\nData Limite: " + vaga.dataLimite +
        "\nDeseja se inscrever nesta vaga? SIM / NAO"
    );

    if (confirmacao.toUpperCase() === "SIM") {
        vaga.candidatos.push(nome);
        alert("Candidato inscrito com sucesso!");
    } else {
        alert("Inscrição cancelada.");
    }
}

function executar() {
    let opcao = 0;
    do {
        opcao = exibirMenu();

        let indice;
        switch (opcao) {
            case 1:
                listarVagas();
                break;
            case 2:
                let nome = prompt("Digite o nome da vaga: ");
                let descricao = prompt("Digite a descrição da vaga: ");
                let dataLimite = prompt("Digite a data limite: ");
                let confirmacao = prompt("Nome da vaga: " + nome +
                    "\nDescrição: " + descricao + "\nData limite: " + dataLimite + "\nDeseja salvar? SIM / NAO");
                if (confirmacao.toUpperCase() === "SIM") {
                    criarVaga(nome, descricao, dataLimite);
                }
                break;
            case 3:
                indice = prompt("Digite o índice da vaga: ");
                visualizarVaga(indice);
                break;
            case 4:
                let nomeCandidato = prompt("Digite o seu nome: ");
                indice = prompt("Digite o índice da vaga: ");
                inscreverCandidato(nomeCandidato, indice);
                break;
            case 5:
                indice = prompt("Digite o índice da vaga: ");
                excluirVaga(indice);
                break;
            case 6:
                alert("Encerrando programa ...");
                break;
            default:
                alert("O número digitado é inválido!");
                break;
        }

    } while (opcao !== 6);
}

executar();