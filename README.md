# Dojo - Backend 

Para executar a api, basta rodar os seguintes comandos:

    yarn install
    yarn start


Rotas:

**GET**  - localhost:3001/tarefas - **Retorna todas as tarefas**

**POST** - localhost:3001/tarefa - **Cria uma nova tarefa**

**PUT** - localhost:3001/tarefa/{id} - **Edita a tarefa referente ao id passado**

**DELETE** - localhost:3001/tarefa/{id} - **Deleta a tarefa referente ao id passado**

# 

## Como criar um novo projeto

Para iniciar um projeto e gerar o aquivo **package.json**:

    yarn init -y

Para adicionar express como uma dependência:

    yarn add express

Crie um arquivo chamado **index.js** e adicione 

``` javascript

const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Api rodando em http://localhost:${port}`)
})

```
Adicione o nodemon, para que ele reinicie o servidor caso haja alguma alteração nos arquivos 

    yarn add nodemon --dev

No arquivo **package.json**, adicione o script para executar o projeto usando o nodemon

``` javascript

"scripts": {
    "start": "nodemon index.js"
  }

```

Para subir a api rode o seguinte comando:

    yarn start

Acesse a api na url **http://localhost:3001/**
