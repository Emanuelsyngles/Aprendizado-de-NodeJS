const express = require("express")
const app = express()
const port = 3000 // variável ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/users/:id', (req, res) => {
    const id = req.params.id

    // leitura da tabela users, resgatar um usuário do banco
    console.log(`Estamos buscando pelo usuário: ${id}`)

    res.sendFile(`${basePath}/users.html`)
})

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`O servidor está alocado na porta ${port}`)
})

app.get('/users/create', (req, res) => {
    res.sendFile(`${basePath}/userform.html`)
})

app.post('users/save', (req, res) => {

})

