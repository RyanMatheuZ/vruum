const form = document.getElementById('form')
form.addEventListener('submit', event => {
    event.preventDefault()

    const name = document.getElementById('name')
    const surname = document.getElementById('surname')
    const message = document.getElementById('message')
    const result = document.getElementById('result')

    if (!name.value) {
        result.innerHTML = '<p>Digite seu nome!</p>'
        name.focus()
    } else if (!surname.value) {
        result.innerHTML = '<p>Digite seu sobrenome!</p>'
        surname.focus()
    } else if (!message.value) {
        result.innerHTML = '<p>Digite sua mensagem!</p>'
        message.focus()
    } else {
        result.innerHTML = '<p>Mesagem enviada!</p>'
    }
})