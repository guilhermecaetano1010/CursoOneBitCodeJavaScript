const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function(){
    // input.value = input.value === '' ? 'Olá, mundo!' : ''
    input.value = 'Olá, mundo!'

    console.log(input.value) // Pega o valor em tempo real
    console.log(input.getAttribute('value')) // Pega o valor do HTML, ou seja o valor pré-definido do INPUT
})


document.getElementById('type').addEventListener('click', function () {
    // input.type = input.type !== 'radio' ? 'radio' : 'text'
    // input.type = input.type !== 'date' ? 'date' : 'text'

    input.setAttribute('type', 'radio')
})

document.getElementById('placeholder').addEventListener('click', function () {
    input.placeholder = 'Digita algo...'
})

document.getElementById('disable').addEventListener('click', function () {
    input.setAttribute('disabled', !input.disable)
})

document.getElementById('data').addEventListener('click', function () {
    const data = input.dataset.somethingElse
    console.log("O valor do atributo data-something-else é: " + data)
    input.dataset.somethingElse = 'Algum outro valor'
    console.log("O valor do atributo data-something-else agora é: " + input.dataset.somethingElse)
})