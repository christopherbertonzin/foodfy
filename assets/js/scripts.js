const cards = document.querySelectorAll('.card')
const modalOverlay = document.querySelector('.modalOverlay')

for (let card of cards) {
    card.addEventListener('click', () => {
        modalOverlay.classList.add('active')
        
    })
}

