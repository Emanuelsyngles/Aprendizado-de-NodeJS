const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.use(express.static('public')) 

app.get('/dashbord', (req, res) => {

    const items = ['Item a', 'Item b', 'Item c', 'Item d', 'Item e']

    res.render('dashbord', { items })
})

app.get('/', (req, res) => {

    const user = {
        name: 'Emanuel',
        surname: 'Leal',
        age: 21,
    }

    const palavra = 'Teste'

    const auth = true

    const approved = true

    res.render('home', { user: user, palavra, auth, approved })
})

app.get('/post', (req, res) => {
    const post = {
        title: 'Aprender Node.js',
        category: 'Javascript',
        body: 'Este artigo vai te ajudar a aprender Node.js...',
        comments: 4,
    }

    res.render('blogpost', { post })
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender Node.js',
            category: 'Javascript',
            body: 'Teste',
            comments: 4,
        },
        {
            title: 'Aprender Python',
            category: 'Python',
            body: 'Teste',
            comments: 4,
        },
        {
            title: 'Aprender PHP',
            category: 'PHP',
            body: 'Teste',
            comments: 4,
        },
    ]
    res.render('Blog', { posts })
})

app.listen(3000, () => {
    console.log('App funcionando!')
})