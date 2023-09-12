let primeiroNome, sobrenome, campoEstudo, anoDeNascimento, idade;

primeiroNome = prompt("Digite seu primeiro nome:")
sobrenome = prompt("Digite seu sobrenome:")
campoEstudo = prompt("Digite seu campo de estudo:")
anoDeNascimento = parseInt(prompt("Digite o ano do seu nascimento:"))

alert("Nome completo do recruta: "+primeiroNome+" "+sobrenome+"\n"+ "Seu campo de estudo é: "+campoEstudo+"\n"+ "Sua idade é: "+(2023 - anoDeNascimento)+" anos")

