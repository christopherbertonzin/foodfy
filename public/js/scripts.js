const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', () => {
        const id = card.id
        window.location.href=`/recipe?id=${id}`
    })
}
