let primeiroNumero, segundoNumero, soma, subtracao, multiplicacao, divisao

primeiroNumero = parseFloat(prompt("Digite o primeiro número a ser calculado: "))
segundoNumero = parseFloat(prompt("Digite o segundo número a ser calculado: "))

soma = primeiroNumero + segundoNumero
subtracao = primeiroNumero - segundoNumero
multiplicacao = primeiroNumero * segundoNumero
divisao = primeiroNumero / segundoNumero

console.log(
"Resultado da soma: "+soma+
"\nResultado da subtração: "+subtracao+
"\nResultado da multiplicação: "+multiplicacao+
"\nResultado da divisão: "+divisao
)