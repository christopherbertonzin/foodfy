const express = require('express')
const nunjucks = require('nunjucks')
const routes = require('./routes')
const server = express()

server.use(express.static('public'))
server.set('view engine', 'njk')
nunjucks.configure('views', { express: server, noCache: true})
server.use(routes)

routes.use((req,res) => {
    res.status(404).render('not-found')
})


// STARTING SERVER
server.listen('3000')
