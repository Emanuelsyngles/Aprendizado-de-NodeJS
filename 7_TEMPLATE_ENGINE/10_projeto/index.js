const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

app.use(express.static('public'))

const products = [
    {
        id:1,
        title: 'Console PS5 original sony',
        price: 3440.99,
    },
    {
        id: 2,
        title: 'Livro',
        price: 12.99,
    },
    {
        id: 3,
        title: 'Abaju',
        price: 560.78,
    },
]

app.get('/', (req, res) => {

    res.render('home', {products})

})

app.get('/product/:id', (req, res) => {
    const product = products[parseInt (req.params.id) - 1]
    
    res.render('product', { product })
})

app.listen(3000)