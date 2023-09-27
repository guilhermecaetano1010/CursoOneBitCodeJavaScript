


/*Escreva um programa em javascript para simular uma fila de espera em um consultório médico. O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc). O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado, e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.*/ 

let escolha = "";
let entrada = "";
let numeroDoPaciente = 4;
let vetor = ["1º Matheus", " 2º Marcos", " 3º Lucas", " 4º Maria"];
alert(vetor);
while (escolha !== "3") {
    alert("Digite a opção desejada:\n"+ "1 - Novo paciente\n"+ "2 - Consultar paciente\n"+ "3 - Sair")
    escolha = prompt();
    switch (escolha) {
        case "1":
            numeroDoPaciente ++; 
               entrada = vetor.push(" "+numeroDoPaciente+"º"+prompt("Digite o nome do paciente que deseja adicionar:")); 
               alert(vetor);
            break;
        case "2":
               entrada = vetor.shift();
               entrada = (prompt("Digite o nome e o número do paciente que deseja consultar:"))
               alert(entrada);
               alert(vetor);
            break;
        case "3":
            escolha = "3";
            break;
    }
}