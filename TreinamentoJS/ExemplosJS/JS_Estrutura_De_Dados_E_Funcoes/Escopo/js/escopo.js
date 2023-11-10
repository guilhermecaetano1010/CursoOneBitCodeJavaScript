let pokemon = "Chamander"

function evoluir() {
    pokemon = "Charmeleon"
}

console.log(pokemon)
evoluir()
console.log(pokemon)

function criarAnimal() {
    let animal = "Gato"
}

criarAnimal() //Variáveris de escopo interno não aparecem automaticamente no escopo externo

// console.log(animal)

function avaliarNota(nota) {
    if (nota > 60){
        var aprovado = true //Quando o var está em uma condicional ou laço de repetição ele pode ser acessado fora da função
        let situacao = "Aprovado" 
    } else {
        var aprovado = false
        let situacao = "Reprovado"
    }

    console.log(nota)
    console.log(aprovado)
    console.log(situacao)
}
// É preciso tomar cuidado ao declarar variáveis com var e ter isso em mente que a variável fica acessível a um escopo externo quando está dentro de uma condicional ou laço de repetição
// avaliarNota(83)
// avaliarNota(49)


function ola() {
    var texto = "Olá, mundo"
}
// Quando o var está dentro somente da função ele não fica disponível para escopos externos mas mesmo assim é melhor optar por let quando declarar a variável
//console.log(texto)


console.log(nome)
//console.log(sobrenome)

var nome = "Guilherme"
let sobrenome = "Caetano"

console.log(nome)
console.log(sobrenome)
