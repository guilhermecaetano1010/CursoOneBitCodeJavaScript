const numero = parseInt(prompt("Digite o número que deseja saber a tabuada:"));
let resultado = "";
let tabuada = 0;
for (let indice = 1; indice <= 20; indice++) {
    resultado += "-> "+indice+" * "+numero+" = "+(numero*indice)+"\n";
}
alert("Resultado da tabuada de: "+numero+"\n\n"+ resultado);
