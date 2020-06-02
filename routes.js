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
// routes.get("/admin/recipes", recipes.index); // Mostrar a lista de receitas
// routes.get("/admin/recipes/create", recipes.create); // Mostrar formulário de nova receita
// routes.get("/admin/recipes/:id", recipes.show); // Exibir detalhes de uma receita
// routes.get("/admin/recipes/:id/edit", recipes.edit); // Mostrar formulário de edição de receita

// routes.post("/admin/recipes", recipes.post); // Cadastrar nova receita
// routes.put("/admin/recipes", recipes.put); // Editar uma receita
// routes.delete("/admin/recipes", recipes.delete); // Deletar uma receita


module.exports = routes
