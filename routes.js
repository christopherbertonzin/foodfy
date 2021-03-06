const express = require('express')
const routes = express.Router()
const client = require('./controllers/client')
const admin = require('./controllers/admin')

// ClIENT
routes.get('/', client.index)
routes.get('/recipes', client.recipes)
routes.get("/recipe", client.show)
routes.get('/about', client.about)


// // ADMIN
routes.get("/admin/recipes", admin.index); // Mostrar a lista de receitas
routes.get("/admin/recipes/create", admin.create); // Mostrar formulário de nova receita
routes.get("/admin/recipes/:id", admin.show); // Exibir detalhes de uma receita
routes.get("/admin/recipes/:id/edit", admin.edit); // Mostrar formulário de edição de receita

routes.post("/admin/recipes", admin.post); // Cadastrar nova receita
routes.put("/admin/recipes", admin.put); // Editar uma receita
routes.delete("/admin/recipes", admin.delete); // Deletar uma receita


module.exports = routes