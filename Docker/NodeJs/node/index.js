const express = require('express');
const mysql = require('mysql');


const app = express();
const port = 3000;
const mysql_config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'usersdb'
};

const connection = mysql.createConnection(mysql_config);
connection.query('DROP TABLE IF EXISTS users');
connection.query('CREATE TABLE IF NOT EXISTS users(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255) UNIQUE)');
connection.query('INSERT INTO users(name) values("Phillipe Smith"), ("Wesley Willians"), ("Full Cycle Team")');

app.get('/', (req, res) => {
    connection.query('SELECT name FROM users', (err, rows) => {
        if (err) throw err

        let html = `
            <h1>Full Cycle Rocks!</h1>
            <hr /><br />
            <h2>Users:</h2>
        `

        rows.forEach(row => {
            html += (`<p>- ${row.name}</p>`)
        });

        res.send(html);
    })
})

app.listen(port, () => {
    console.log(`App running on port ${port}...`);
})
