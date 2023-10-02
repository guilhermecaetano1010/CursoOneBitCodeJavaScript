let nome = "prop";

nome;

let objeto = {};

objeto;

objeto.prop = "Olá, mundo!"

objeto;

objeto.prop;

objeto[nome];

objeto.prop === objeto["prop"];

objeto.prop === objeto[nome];

objeto.prop === objeto["pro" + "p"];

let funcao = "log"

funcao;

console[funcao] ("Olá, mundo!")

const pessoa = {};

pessoa.nome = "Isaac";
pessoa.idade = 26;

pessoa;

pessoa.colegas = ["Lucas", "Juliana", "Rafael"];

pessoa.endereco = {
    rua: "Rock Estrela",
    numero: 42 ,
    bairro: "centro"
}
pessoa;

// É necessário copiar e colar os comandos no console pois não está sendo utilizada a função console.log para mostrar os valores
