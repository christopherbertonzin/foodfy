const fs = require('fs')
const data = require('../data.json')
const { render } = require('nunjucks')

exports.index = (req, res) => {
    return res.render('admin/index', { items: data.recipes})
}

exports.create = (req, res) => {
    return res.render('admin/create')
}

exports.post = (req, res) => {
    const keys = Object.keys(req.body)

    for (let key of keys) {
        if (req.body[key] == '') {
            res.send('Preencha todos os campos!')
        }
    }

    req.body.id = Number(data.recipes.length + 1)
    req.body.author = `por ${req.body.author}`

    const { id, author, title, image, ingredients, preparation, information } = req.body

    data.recipes.push({
        id,
        author,
        title,
        image,
        ingredients,
        preparation,
        information
    })

    fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
        if (err) return res.send('Falha ao salvar dados no servidor')

        return res.redirect('/admin/recipes')
    } )

}

exports.show = (req, res) => {
    const { id } = req.params

    const foundRecipe = data.recipes.find((recipe) => {
        if (recipe.id == id) {
            return true
        }
    })
    
    if (!foundRecipe) {
        return res.render('not-found')
    }
    return res.render('admin/recipe', { item: foundRecipe})
}

exports.edit = (req, res) => {
    const { id } = req.params

    const foundRecipe = data.recipes.find((recipe) => {
        if (recipe.id == id) {
            return true
        }
    })
    
    if (!foundRecipe) {
        return res.render('not-found')
    }
    return res.render('admin/edit', { recipe: foundRecipe})
}

exports.put = (req, res) => {
    const { id } = req.body
    let index = 0

    const foundRecipe = data.recipes.find((recipe, indexRecipe) => {
        if (recipe.id == id) {
            index = indexRecipe
            return true
        }
    })

    if (!foundRecipe) {
        return res.send('Receita não encontrada')
    }

    const recipe = {
        ...foundRecipe,
        ...req.body,
        id: Number(foundRecipe.id)
    }

    data.recipes[index] =  recipe

    console.log(recipe)

    fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
        if (err) return res.send('Erro ao salvar dados')

        return res.redirect(`/admin/recipes/${id}`)
    })


}
exports.delete = (req, res) => {
    const { id } = req.body

    const foundRecipe = data.recipes.filter((recipe) => {
        return id != recipe.id
    })

    data.recipes = foundRecipe

    fs.writeFile('data.json', JSON.stringify(data, null, 4), (err) => {
        if (err) return res.send('Erro ao salvar dados')

        return res.redirect(`/admin/recipes/`)
    })
}