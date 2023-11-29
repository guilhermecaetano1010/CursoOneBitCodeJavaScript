function register(ev) {
    console.log(ev)
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value
    
    if(password === passwordConfirmation){
        alert('Usuário ' + username + ' registrado!')
    } else {
        alert('As senhas não conferem!')
    }
}   


const button = document.getElementById('register-button')

button.addEventListener('click', register) //É possível adicionar um evento

function removeListener() {
    button.removeEventListener('click', register)
    alert('Event Removed.')
} // É possível remover um evento 

button.addEventListener('mouseover', function (ev) {
    console.log(ev.currentTarget)

}) // É possível colocar dois eventos no mesmo componente no caso o botão