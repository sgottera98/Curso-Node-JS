const express = require('express')
const app = express()
const port = 5000

const path = require('path')

const products = require('./products')

app.use(express.static('public'))

const basePath = path.join(__dirname, 'templates')

app.use('/products', products)

app.get('/', (req, res) => {
    res.sendFile(`${basePath}/index.html`)
})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})