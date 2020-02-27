const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modalOverlay')

for (let card of cards) {
    card.addEventListener('click', () => {
        const id = card.getAttribute('id')
        
        const description = card.querySelector('p').textContent

        const title = card.querySelector('h2').textContent

        modalOverlay.classList.add('active')
        
        modalOverlay.querySelector('img').src = `./assets/img/${id}.png`
        modalOverlay.querySelector('h1').textContent = `${title}`
        modalOverlay.querySelector('p').textContent = `${description}`
        
    })
}

