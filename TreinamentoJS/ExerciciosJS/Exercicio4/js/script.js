
let nomeCidade
let contagem = 0
let cidades = ""
const nomeTurista = prompt("Digite seu nome: ")

let visitou = prompt("Visitou alguma cidade?(Sim/Não)")

while (visitou === "Sim") {
    nomeCidade = prompt("Digite o nome da cidade: ")
    visitou = prompt("Visitou alguma outra cidade?(Sim/Não)")
    cidades += "- "+ nomeCidade + "\n" 
    contagem ++
}
// console.log("O turista "+nomeTurista+" visitou as cidade de: \n"+ cidades)
// console.log("O turista, "+nomeTurista+" visitou o total de "+quantas+" cidades.") Jeito que eu fiz está certo

alert("Turista: " + nomeTurista +
"\nQuantidade de cidades visitadas: "+ contagem +
"\nCidades visitadas: \n"+ cidades
) // Correção
