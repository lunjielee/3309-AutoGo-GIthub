const newConnection = require('./DBConnector');
const conn = newConnection();
conn.connect();


conn.query(` CREATE TABLE IF NOT EXISTS Client (
                clientNo int NOT NULL AUTO_INCREMENT,
                name varchar(45) NOT NULL,
                password varchar(45) NOT NULL,
                address varchar(45) NOT NULL,
                phone int NOT NULL,
                PRIMARY KEY (clientNo)
            )`,
            (error,rows,fields)=>{
            if(error)
                console.log(error);
            else
                console.log('Table Created');  
            })

conn.query(`INSERT INTO Client values (NULL,'Henry','123','address',5171801935)`,
            (error,rows,fields)=>{
            if(error)
                console.log(error);
            else
                console.log('One Row Inserted');  
            })


conn.query(`SELECT * FROM Client`,
            (error,rows,fields)=>{
            if(error)
                console.log(error);
            
            for(r of rows)
                console.log(r);
            })


        
              