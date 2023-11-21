const personagens = [
    {nivel: 42 , nome: "Thrall", raca: "Orc", classe: "Xamã"},
    {nivel: 28, nome: "Garrosh", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Varok", raca: "Orc", classe: "Guerreiro"},
    {nivel: 35, nome: "Uther", raca: "Humano", classe: "Paladino"},
    {nivel: 26, nome: "Jaina", raca: "Humano", classe: "Maga"},
    {nivel: 39, nome: "Tyrande", raca: "Elfo Noturno", classe: "Sacerdotisa"},
    {nivel: 29, nome: "Muradin", raca: "Anão", classe: "Guerreiro"},
]


//Map cria um array a partir de outro array

// const nomes = []

// for (let i = 0; i< personagens.length; i++) {
//     nomes.push(personagens[i].nome)
// }

// console.log(nomes)


const nomes = personagens.map(function (personagem) {
    return personagem.nome
})

console.log(nomes)




//Filter pega elementos específicos do array e cria outro array

// const orcs = []

// for (let i = 0; i < personagens.length; i++) {
//     if(personagens[i].raca == "Orc"){
//         orcs.push(personagens[i])
//     }
// }
// console.log(orcs)


const orcs = personagens.filter(function (personagem){
    return personagem.raca === "Orc"
})

console.log(orcs)




//Reduce transforma um array em qualquer outra coisa como: array, objeto, numero, string


// let soma = 0
// for (let i = 0; i < personagens.length; i++) {
//     soma += personagens[i].nivel
// }

// console.log(soma)


const nivelTotal = personagens.reduce(function  (valorAcumulado, personagem) {
    return valorAcumulado + personagem.nivel
}, 0) // Transformou em apenas um número que é resultado da soma

console.log(nivelTotal)


const racas = personagens.reduce(function (valorAcumulado, personagem) {
    if (valorAcumulado[personagem.raca]) {
        valorAcumulado[personagem.raca].push(personagem)
    } else {
        valorAcumulado[personagem.raca] = [personagem]
    }
    return valorAcumulado
}, {})

console.log(racas)





// Sort  Serve para ordenar Arrays, ou seja, trocar elementos de posição de acordo com um critério deixando-os em ordem

personagens.sort()

