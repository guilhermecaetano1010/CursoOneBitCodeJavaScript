function switchCase() {
    let valorMetros = parseFloat(prompt("Digite o valor em metros que deseja converter: "))
    console.log("Escolha uma unidade de medida para converter: " +
        "\n1 - milímetro (mm)"  +
        "\n2 - centímetro (cm)" +
        "\n3 - decímetro (dm)"  +
        "\n4 - decâmetro (dam)" +
        "\n5 - hectômetro (hm)" +
        "\n6 - quilômetro (km)"
    )
    let escolha = parseInt(prompt("Digite o número que corresponde a unidade de medida que você deseja obter: "))

    switch (escolha) {
        case 1:
            valorMetros *= 1000
            console.log("O valor em milímetros é: "+valorMetros+" (mm)")
            break;
        case 2:
            valorMetros *= 100
            console.log("O valor em centímetros é: "+valorMetros+" (cm)")
            break;
        case 3:
            valorMetros *= 10
            console.log("O valor em decímetro é: "+valorMetros+" (dm)")
            break;
        case 4:
            valorMetros /= 10
            console.log("O valor em decâmetro é: "+valorMetros+" (dam)")
            break;
        case 5:
            valorMetros /= 100
            console.log("O valor em hectômetro é: "+valorMetros+" (hm)")
            break;
        case 6:
            valorMetros /= 1000
            console.log("O valor em quilômetro é: "+valorMetros+" (km)")
            break;

        default:
            console.log("Opção inválida!")
            break;
    }
}
/*Conversor de Medidas

Escreva um programa em javascript que funcione como um conversos de medidas. O programa deverá pedir por um valor em metros e então dar a opção de escolher para qual unidade de medida esse valor deve ser convertido. As opções são:

- milímetro (mm)
- centímetro (cm)
- decímetro (dm)
- decâmetro (dam)
- hectômetro (hm)
- quilômetro (km)

O programa deve então converter a medida de acordo com a opção escolhida e exibir o resultado.

O programa também deve exibir uma mensagem de “Opção inválida” caso o usuário insira uma opção diferente das disponíveis (use o break e o default para isso)*/