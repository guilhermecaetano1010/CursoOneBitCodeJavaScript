const nomePrimeiro = prompt("Insira o nome do primeiro veículo:")
const vPrimeiro = parseInt(prompt("Insira a velocidade do primeiro veículo:"))
const nomeSegundo = prompt("Insira o nome do segundo veículo:")
const vSegundo = parseInt(prompt("Insira a velocidade do segundo veículo:"))

if (vPrimeiro > vSegundo){
 alert("O veículo"+" "+nomePrimeiro+" "+"é o mais veloz!")

}else if(vPrimeiro === vSegundo){
    alert("As velocidades são iguais.")

}
else{
    alert("O veículo"+" "+nomeSegundo+" "+"é o mais veloz!")
}

