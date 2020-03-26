const buttons = document.querySelectorAll('.btn--display')

for (let button of buttons) {
    button.addEventListener('click', () => {
        const content = document.querySelector(`#show--hide--${button.id}`)
        if ( content.classList.contains('recipe--active') ) {
            content.classList.remove('recipe--active')
            button.textContent = 'ESCONDER'

        } else {
            content.classList.add('recipe--active')
            button.textContent = 'MOSTRAR'

        }
    })
}
