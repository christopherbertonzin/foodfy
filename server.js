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
server.get('/about', (req, res) => res.render('about'))

server.get('/recipes/:index', (req, res) => {
    const recipes = items
    const recipesIndex = req.params.index;
})

server.use((req,res) => {
    res.status(404).render('not-found')
})
