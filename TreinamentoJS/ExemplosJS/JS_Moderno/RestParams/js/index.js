function sum(/* param, */ ...numbers) { // Posso passar muitos parâmetros e tratá-los em um array utilizando ...param, sempre colocar ele por último
    return numbers.reduce((acumulador, numeros) => acumulador + numeros, 0)
}

console.log(sum(1, 1))
console.log(sum(2, 2, 2, 2, 2, 2))
console.log(sum(32, 5, 74, 7, 1, 9, 90))