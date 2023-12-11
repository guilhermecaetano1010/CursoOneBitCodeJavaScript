function useLightTheme() {
    // console.log(document.body.style)  // Mostra tudo que pode ser feito com o style
    document.body.style.color = '#212529'
    document.body.style.backgroundColor = '#f1f5f9'
}

function useDarkTheme() {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
}

function switchTheme() {
    document.body.classList.toggle('is-light')
    document.body.classList.toggle('is-dark')
}


document.getElementById('lightBtn').addEventListener('click', useLightTheme) // Maneira Inline de fazer
document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme) // Não pode misturar o inline e o class como ele fez nessa aula mas ele fez para exemplificar.