const express = require('express')
const exphbs = require('express-handlebars')
const { partials } = require('handlebars')

const app = express()

const hbs = exphbs.create({
    partialsDir: ['views/partials'],
})

app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

app.get('/dashboard', (req, res) => {

    const items = ["Item 1", "Item 2", "Item 3"]

    res.render('dashboard', {items})
})

app.get('/post', (req, res) => {

    const post = {
        title: 'Aprender NodeJS',
        category: 'JavaScript',
        body: 'Este artigo vai te ajudar a aprender NodeJS...',
        comments: 4
    }

    res.render('blogpost', {post})
})

app.get('/blog', (req, res) => {
    const posts = [
        {
            title: 'Aprender NodeJS',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender NodeJS...',
            comments: 4
        },
        {
            title: 'Aprender ReactJS',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender ReactJS...',
            comments: 4
        },
        {
            title: 'Aprender Angular',
            category: 'JavaScript',
            body: 'Este artigo vai te ajudar a aprender Angular...',
            comments: 4
        }
    ]

    res.render('blog', {posts})
})

app.get('/', (req, res) => {
    const user = {
        name: 'Joaquim',
        surname: 'Ferreira',
        age: '23'
    }

    const palavra = 'teste'

    const auth = true

    const approved = false
    
    res.render('home', {user: user, palavra, auth, approved})
})

app.listen(3000, () => console.log('servidor rodando na porta 3000'))