function dobro(x){
    alert("O dobro de " + x + " é " + (x * 2))
}

//dobro(5)
//dobro(7)
//dobro()

function dizerOla(nome = "mundo"){
    alert("Olá, " + nome + "!")
}

//dizerOla("Isaac")
//dizerOla()

function soma (a, b){ // pode usar quantos parâmetros quiser
    alert("O resultado da soma é " + (a + b))
}

// soma(7 , 6)


function criarUsuario(nome, email, senha, tipo = "admin") {
    const usuario = {
        // nome: nome,
        // email: email,
        // senha: senha,
        // tipo: tipo
        nome, // é a mesma coisa que nome:nome
        email,    
        senha,
        tipo
    }
    console.log(usuario)
}

criarUsuario("Guilherme", "guilherme@email.com", 1234)


function muitosParametros(nome, telefone, endereco, aniversario, email, senha){
    //...
}

function objetoComoParametro(usuario){
    //...
    usuario.nome
    usuario.email
}

muitosParametros("nome", "telefone", "endereco", "aniversario", "email", "senha")

const dadosDoUsuario = {
    nome: "",
    telefone: "",
    email: "",
    senha: "",
    endereco: "",
    aniversario: "",
}

objetoComoParametro(dadosDoUsuario)