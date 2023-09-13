// inicialização ; condição ; finalização

// for(let indice = 0; indice<=10; indice++){
//     alert("Indice = " + indice);
// }


// Jeitos de utilizar o for 

// let indice = 0;
// for(alert("Inicializando for"); indice<=10; alert("Finalizando bloco de repetição")){
//     alert("Indice = " + indice);
//     indice ++;
// }


// Todos os itens do for são opcionais

// Sem finalização
// let indice = 0;
// for(alert("Inicializando for"); indice<=10;){
//     alert("Indice = " + indice);
//     indice ++;
// }

//Sem inicialização mas com ; no começo
// let indice = 0;
// for(; indice<=10;){
//     alert("Indice = " + indice);
//     indice ++;
// }

// Sem validação e nenhum dos 3 casos

// let indice = 0;
// for(; ;){
//     indice ++;
//     alert("Indice = " + indice);
//     break;
// }

let nome = "Guilherme Caetano" // tamanho da string .length 0,1,2,3,4

for (let indice = 0; indice < nome.length; indice++) {
    console.log(nome[indice])
}