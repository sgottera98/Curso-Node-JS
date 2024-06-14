const express = require('express')
const exphbs = require('express-handlebars')
const { partials} = require('handlebars')

const app = express()
const port = 3000

app.engine('handlebars', exphbs.engine())
app.set('view engine', 'handlebars')

app.use(express.static('public'))

const products = [
    {
        id: 1,
        name: 'Notebook',
        price: 2499
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 999
    },
    {
        id: 3,
        name: 'Tablet',
        price: 499
    }
]

app.get('/product/:id', (req, res) => {
    const id = req.params.id
    const product = products.find(product => product.id == id)
    res.render('product', {product})
})

app.get('/', (req, res) => {
    res.render('home', {products})
})

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})