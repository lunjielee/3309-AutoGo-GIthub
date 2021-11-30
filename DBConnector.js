const mysql = require('mysql');

function newConnection() {
    const conn = mysql.createConnection({
        host: 'jtb9ia3h1pgevwb1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'cx7hxpf3okktuuml',
        password: 'lm296jpll5j17wqk',
        port:'3306',
        database: 'hvmpxx81gs6eza1p'
    })
    return conn;
}

module.exports = newConnection;