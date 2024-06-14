const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
  req.authStatus = false;

  if(req.authStatus) {
    console.log('Está logado, pode continuar');
    next() //vá adiante, no caso, o app.get sendFile
  } else {
    console.log('Não está logado, faça o login para continuar');
    next() //vá adiante (next não trava a execução)
  }
};

app.use(checkAuth)

app.get("/", (req, res) => {
  // req é o que veio
  // res é a resposta que vai

  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
