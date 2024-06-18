const mysql = require('mysql')

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'root',
    password: 'P@ssw0rd',
    database: 'nodemysql'
})

module.exports = pool