function somar(a, b) {
    return a + b
}

let operacao = somar

console.log(operacao(4, 5)) //É possível guardar uma função dentro de uma variável

operacao = function (a,b) {
    return a - b
}

console.log(operacao(4, 5))  // Funções anonimas não precisam de um nome apenas serem armazenadas em uma variável




olaMundo()

function olaMundo(){
    console.log("Olá, mundo!")
}

const oiMundo = function () {
    console.log("Oi, mundo!")
}

oiMundo() // Funções anônimas só conseguem ser executadas depois da inicialização não são como as funções nomeadas são jogadas automaticamente para cima do código 