const data = require('../data.json')

exports.index = (req, res) => {
    res.render('client/index', { items: data.recipes})
}

exports.recipes = (req, res) => {
    res.render('client/recipes', {items: data.recipes})
}

exports.show = (req, res) => {
    const recipeId = req.query.id

    const foundRecipe = data.recipes.find((recipe) => {
        if (recipe.id == recipeId) {
            return true
        }
    })
    if (!foundRecipe) {
        return res.render('not-found')
    }

    return res.render('client/recipe', { item: foundRecipe})
    
}

exports.about = (req, res) => {
    res.render('client/about')
}