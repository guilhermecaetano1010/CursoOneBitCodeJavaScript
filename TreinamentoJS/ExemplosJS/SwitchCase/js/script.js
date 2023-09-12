function switchCase() {

    const resultado = prompt("Escolha uma alternativa: ");
    // const resultadoNumerico = parseFloat(resultado); caso queira deixar em números no switch case
    switch (resultado) {
        case "a":
            alert("O resultado é 'a'");
            break;
        case "b":
            alert("O resultado é 'b'");
            break;
        case "c":
            alert("O resultado é 'c'");
            break;

        default:
            alert("finalizando");
            break;

    }
}