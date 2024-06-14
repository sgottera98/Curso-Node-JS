const express = require('express')
const app = express()
const port = 3000 //variavel ambiente

app.get('/', (req, res) => {

    // req é o que veio
    // res é a resposta que vai

    res.send('Ola mundo')

})

app.listen(port, () => {
    console.log(`App rodando na porta ${port}`);
})