const nomePrimeiro = prompt("Digite o nome do primeiro personagem:")
const poderAtaque = parseFloat(prompt("Digite o poder de ataque:"))
const nomeSegundo = prompt("Digite o nome do segundo personagem:")
const pontosVida = parseFloat(prompt("Digite os pontos de vida:"))
const poderDefesa = parseFloat(prompt("Digite o poder de defesa:"))
const escudo = prompt("O personagem tem escudo (Sim/Não)?")
let danoTotal = 0

if(poderAtaque > poderDefesa && escudo ==="Não"){
    danoTotal = poderAtaque - poderDefesa
}
else if(poderAtaque > poderDefesa && escudo ==="Sim"){
     danoTotal = (poderAtaque - poderDefesa)/2
}
else{
    danoTotal = 0
}
let resultado = pontosVida - danoTotal

alert("O personagem de ataque "+nomePrimeiro+" tem um poder de ataque de: "+poderAtaque+"\n"+
"O personagem de defesa "+nomeSegundo+" tem "+pontosVida+" pontos de vida e "+poderDefesa+" de poder de defesa"+"\n"+
"O personagem de defesa tem escudo?"+escudo+" "+"\n"+
"A quantidade de dano foi de: "+danoTotal+"\n"+
"Depois do defensor "+nomeSegundo+" sofrer dano, seus pontos de vida são: "+resultado
)

