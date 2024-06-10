const inquirer = require("inquirer");
const chalk = require("chalk");

try {
  inquirer
    .prompt([
      {
        name: "p1",
        message: chalk.bgYellow.black("Qual seu nome?"),
      },
      {
        name: "p2",
        message: chalk.bgYellow.black("Qual sua idade?"),
      },
    ])
    .then((answer) => {

      if (!answer.p1 || !answer.p2) {
        throw new Error('o nome e a idade são obrigatórios')
      }

      console.log(
        chalk.bgYellow.black(`Seu nome é ${answer.p1} e você tem ${answer.p2}`)
      );
    })
    .catch((err) => {
      console.log(err);
    });
} catch (err) {
    console.log(`Erro: ${err}`);
}
