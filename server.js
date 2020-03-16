const express = require('express')
const nunjucks = require('nunjucks')
const items = require('./data')
const server = express()

// STARTING SERVER
server.listen('3000')

// NUNJUCKS
server.use(express.static('public'))
server.set('view engine', 'njk')
nunjucks.configure('views', { express: server, noCache: true})

// ROUTES
server.get('/', (req, res) => res.render('index', { items }))
server.get('/recipes', (req, res) => res.render('recipes', { items }))
server.get("/recipe", (req, res) => {
    const recipeId = req.query.id

    const recipe = items.find(function(recipe) {
        if (recipe.id == recipeId) {
            return true
        }
    })
    if (!recipe) {
        return res.send('Recipe not found')
    }
    res.render('recipe', {item: recipe})
    
})

server.get('/about', (req, res) => res.render('about'))
server.use((req,res) => {
    res.status(404).render('not-found')
})
