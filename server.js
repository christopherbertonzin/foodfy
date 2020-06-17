const express = require('express')
const nunjucks = require('nunjucks')
const methodOverride = require('method-override')
const routes = require('./routes')
const server = express()

server.use(express.static('public'))
server.use(express.urlencoded({ extended:true }))
server.use(methodOverride('_method'))
server.set('view engine', 'njk')
nunjucks.configure('views', { 
    express: server,
    autoescape: false,
    noCache: true})

server.use(routes)

routes.use((req,res) => {
    res.status(404).render('not-found')
})


// STARTING SERVER
server.listen('5000')
