const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('nodesequelize', 'root', 'P@ssw0rd', {
    host: 'localhost',
    dialect: 'mysql'
})

try {

    sequelize.authenticate()
    console.log('Conectado ao MySQL com sucesso!')

} catch(err) {
    console.log('Não foi possível conectar ao MySQL:', err);
}

module.exports = sequelize