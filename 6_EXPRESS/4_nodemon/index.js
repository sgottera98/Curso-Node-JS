const express = require('express')
const app = express()
const port = 3000 //variavel ambiente

const path = require('path')

const basePath = path.join(__dirname, 'templates')

app.get('/', (req, res) => {

    // req é o que veio
    // res é a resposta que vai

    res.sendFile(`${basePath}/index.html`)

})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})