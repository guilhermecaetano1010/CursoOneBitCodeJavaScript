
const palavra = prompt("Digite um palavra para verificar se é um palíndromo:");

let palavraInvertida = "";
 
for (let indice = palavra.length - 1; indice >= 0; indice--) {
    palavraInvertida += palavra[indice];
}

if (palavra === palavraInvertida) {
    alert(palavra + " é um palíndromo!")
  } else {
    alert(palavra + " não é um palíndromo!\n\n" + palavra + " !== " + palavraInvertida)
  }


  