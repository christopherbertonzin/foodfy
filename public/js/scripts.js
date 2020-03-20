const cards = document.querySelectorAll('.card')
// const buttons = document.querySelectorAll('#btn--display')
// const recipeContent = document.querySelectorAll('.recipe--content')



for (let card of cards) {
    card.addEventListener('click', () => {
        const id = card.id
        window.location.href=`/recipe?id=${id}`
        
    })
}

// for (let button in buttons) {
//     button.addEventListener('click', () => {
//         console.log('ok')
//         // recipeContent.class.add('recipe--active')
//     })
// }