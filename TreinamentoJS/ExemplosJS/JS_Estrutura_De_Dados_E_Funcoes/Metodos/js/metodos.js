let pessoa = {
    nome: "Guilherme",
    idade: 22,
    dizerOla(){
        console.log("Olá, mundo! Meu nome é " + this.nome)
    }
}

console.log(pessoa)
pessoa.dizerOla();