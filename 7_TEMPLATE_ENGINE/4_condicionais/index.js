const express = require('express')
const exphbs = require('express-handlebars')

const app = express()

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.get('/', (req, res) =>{

    const palavra = 'Teste'
    
    const auth = true

    const user = { 
        name: 'Emanuel',
        surname: 'Leal',
        age: 21,
    }

    res.render('home', {user: user, palavra, auth})
})

app.listen(3000, ()=> {
    console.log('App funcionando!')
})