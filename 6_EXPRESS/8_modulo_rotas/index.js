const express = require("express");
const app = express();
const port = 3000; //variavel ambiente

const path = require("path");

const users = require("./users");

//ler o body
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use(express.json());

const basePath = path.join(__dirname, "templates");

app.get("/products/:id", (req, res) => {
  const id = req.params.id;

  console.log(`Buscando produto ${id}`);

  res.sendFile(`${basePath}/products.html`);
});

app.use("/users", users);

app.get("/", (req, res) => {
  res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
  console.log(`App rodando na porta ${port}`);
});
