
const newConnection = require('./DBConnector');
const conn = newConnection();
conn.connect();

conn.query(`SELECT * FROM clients WHERE name='Henry'`,
            (error,rows,fields)=>{
            if(error)
                console.log(error);
            
            for(r of rows)
                console.log(r);
            })


conn.end();