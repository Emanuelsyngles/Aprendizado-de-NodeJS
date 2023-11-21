const express = require("express")
const app = express()
const port = 5000 // variável ambiente

const path = require('path')

const usersRoutes = require('./users')

// ler o lobby
app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

// arquivos estáticos
app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/users', usersRoutes)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.get('/sapatos', (req, res) => {
    res.sendFile(`${basePath}/sapatos.html`)
})

app.get('/loja', (req, res) => {
    res.sendFile(`${basePath}/loja.html`)
})

app.listen(port, () => {
    console.log(`O servidor está alocado na porta ${port}`)
})



