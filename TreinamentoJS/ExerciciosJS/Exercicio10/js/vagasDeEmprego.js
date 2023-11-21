function exibirMenu(){
    return parseInt(prompt("Escolha uma das opções: "+
    "\n1 - Listar vagas disponíveis"+
    "\n2 - Criar uma nova vaga"+
    "\n3 - Visualizar uma vaga"+
    "\n4 - Inscrever um candidato em uma vaga"+
    "\n5 - Excluir uma vaga"+
    "\n6 - Sair"
))}
let vagas = []
let listarVagas = vagas.forEach(function (elemento, indice, array) {
    alert({
        elemento,
        indice, 
        array
    })
})


let criarVaga = function(nome, descricao, dataLimite) {
let novaVaga = {nome, descricao, dataLimite}
vagas.push(novaVaga);
}

let visualizarVaga = function(posicao) {
    alert(vagas[posicao])
}

let excluirVaga = function(nome, descricao, dataLimite) {
    let novaVaga = {nome, descricao, dataLimite}
    vagas.push(novaVaga);
    }