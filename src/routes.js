const express = require('express')
const routes = express.Router()
const TarefasController = require('./controllers/TarefasController')

routes.get('/tarefas', TarefasController.index)
routes.post('/tarefa', TarefasController.store)
routes.put('/tarefa/:id',TarefasController.editTarefa)
routes.delete('/tarefa/:id', TarefasController.deleteTarefa)

module.exports = routes;