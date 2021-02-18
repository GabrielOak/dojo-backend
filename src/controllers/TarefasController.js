const tarefas = [
    {
        nome: "Estudar React",
        desc: "Estudar react e aprender a usar melhor os states",
        pronto: false
    },
    {
        nome: "Estudar back-end",
        desc: "Estudar expressjs pra construir uma api",
        pronto: false
    }
]


const index = (request, response) => {

    // Retornar todas as tarefas

    return response.json(tarefas)
}

const store = (request, response) =>{

    // Criar uma nova tarefa 

    const {nome, desc, pronto} = request.body;

    const tarefa =  {
        nome: nome,
        desc: desc,
        pronto: pronto
    }
    
    tarefas.push(tarefa)
    
    return response.json(tarefa) 
}

const editTarefa = (request, response) => {
    
    // Editar uma tarefa pelo id

    const id = request.params.id

    const {nome, desc, pronto} = request.body

    tarefas[id].nome = nome
    tarefas[id].desc = desc
    tarefas[id].pronto = pronto

    return response.json(tarefas[id])
}

const deleteTarefa = (request, response) =>{

    // Deletar uma tarefa pelo id

    const id = request.params.id

    if(id > -1){
        tarefas.splice(id, 1);
    }

    return response.json(tarefas) 
}

module.exports = {index, store, editTarefa, deleteTarefa}