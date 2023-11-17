//Como o professor resolveu
function calcularTringulo() {
    let baseTriangulo = parseFloat(prompt("Digite a base do triângulo: "));
    let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo: "));
    return baseTriangulo * alturaTriangulo / 2;
}

function calcularRetangulo() {
    let baseRetangulo = parseFloat(prompt("Digite a base do retângulo: "));
    let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo: "));
    return baseRetangulo * alturaRetangulo;
}

function calcularQuadrado() {
    let lado = parseFloat(prompt("Digite o lado do quadrado: "));
    return lado * lado;
}

function calcularTrapezio() {
    let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "));
    let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "));
    let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio: "));
    return (baseMaior + baseMenor) * alturaTrapezio / 2;
}

function calcularCirculo() {
    let raio = parseFloat(prompt("Digite o raio do círculo: "));
    return (3.14 * raio * raio);
}

function exibirMenu() {
    return prompt(
        "Digite o número da forma geométrica que deseja calcular a área: " +
        "\n1 - Triângulo" +
        "\n2 - Retângulo" +
        "\n3 - Quadrado" +
        "\n4 - Trapézio" +
        "\n5 - Círculo" +
        "\n6 - Sair\n"
    );
}

function executar() {
    let opcao = "";
    do {
        opcao = exibirMenu();
        let resultado;

        switch (opcao) {
            case "1":
                resultado = calcularTringulo();
                break;
            case "2":
                resultado = calcularRetangulo();
                break;
            case "3":
                resultado = calcularQuadrado();
                break;
            case "4":
                resultado = calcularTrapezio();
                break;
            case "5":
                resultado = calcularCirculo();
                break;
            case "6":
                alert("Encerrando programa ...");
                break;
            default:
                alert("O número digitado é inválido!");
                break;
        }
        if (resultado !== undefined) {
            alert("Resultado: " + resultado);
        }
    } while (opcao !== "6");
}

executar();




                                
// function calcularTringulo(base, altura) {
//     let area = base * altura / 2
//     return area
// }
// function calcularRetangulo(base, altura) {
//     let area = base * altura
//     return area
// }
// function calcularQuadrado(lado) {
//     return calcularRetangulo(lado, lado)
// }
// function calcularTrapezio(baseMaior, baseMenor, altura) {
//     let area = (baseMaior + baseMenor) * altura / 2
//     return area
// }
// function calcularCirculo(raio) {
//     let area = Math.pow(raio, 2) * Math.PI;
//     return area
// }
                                
// let escolha = 0;
// do{
//     escolha =   parseInt(prompt("Digite o número da forma geométrica que deseja calcular a área: " +
//         "\n1 - Triângulo" +
//         "\n2 - Retângulo" +
//         "\n3 - Quadrado" +
//         "\n4 - Trapézio" +
//         "\n5 - Círculo" +
//         "\n6 - Sair"))
//     switch (escolha) {
//         case 1:
//             let baseTriangulo = parseFloat(prompt("Digite a base do triângulo: "))
//             let alturaTriangulo = parseFloat(prompt("Digite a altura do triângulo: "))
//             let areaTriangulo = calcularTringulo(baseTriangulo, alturaTriangulo)
//             alert("A área do triângulo é igual a: " + areaTriangulo + " m²")
 //             break;
//         case 2:
//             let baseRetangulo = parseFloat(prompt("Digite a base do retângulo: "))
//             let alturaRetangulo = parseFloat(prompt("Digite a altura do retângulo: "))
//             let areaRetangulo = calcularRetangulo(baseRetangulo, alturaRetangulo)
//             alert("A área do retângulo é igual a: " + areaRetangulo + " m²")
//             break;
//         case 3:
//             let lado = parseFloat(prompt("Digite o lado do quadrado: "))
//             let areaQuadrado = calcularQuadrado(lado)
//             alert("A área do quadrado é igual a: " + areaQuadrado + " m²")
//             break;
//         case 4:
//             let baseMaior = parseFloat(prompt("Digite a base maior do trapézio: "))
//             let baseMenor = parseFloat(prompt("Digite a base menor do trapézio: "))
//             let alturaTrapezio = parseFloat(prompt("Digite a altura do trapézio: "))
//             let areaTrapezio = calcularTrapezio(baseMaior, baseMenor, alturaTrapezio)
//             alert("A área do trapézio é igual a: " + areaTrapezio + " m²")
//             break;
//         case 5:
//             let raio = parseFloat(prompt("Digite o raio do círculo: "))
//             let areaCirculo = calcularCirculo(raio)
//             alert("A área do círculo é igual a: " + areaCirculo.toFixed(2) + " m²")
//             break;
//         case 6:
//             alert("Encerrando programa ...")
//             break;
                                
//         default:
//             alert("O número digitado é inválido!")
//             break;
                                
//     }
// }while(escolha!==6)            Fiz assim pois pensei que seria melho estudar como passava parâmetros
                                
                                
                                