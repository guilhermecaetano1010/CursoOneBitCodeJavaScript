
const idade = prompt("Informe a sua idade:")


if(idade > 18){
    console.log("Você é maior de idade")
}
else if(idade>12){
    console.log("Você é menor idade")
}
else if(idade<4){
    console.log("Você é criança")
}
else{
    alert("Você não respondeu")
}

const resultado = (5 === 5) ? "Verdadeiro" : "Falso" // Outro jeito de escrever o If(?) e Else(:)
console.log(resultado) 