require("dotenv").config();
const mysql = require("mysql2");
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: process.env.MY_SQL_PASSWORD,
    database: 'stadium'
});
module.exports = connection.promise();