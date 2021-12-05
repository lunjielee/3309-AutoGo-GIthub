
const newConnection = require('./DBConnector');
const conn = newConnection();
conn.connect();

// conn.query(`SELECT * FROM clients WHERE name='Henry'`,
//             (error,rows,fields)=>{
//             if(error)
//                 console.log(error);

//             for(r of rows)
//                 console.log(r);
//             })


let branchNo = 1;
let clientNo = 1;
let date = '2021-08-20 10:00:00';
let service1='car wash';
const thisAppointmentNo = `SELECT appointmentNo FROM appointments WHERE date='${date}' AND branchNO=${branchNo} AND clientNo=${clientNo}`;

conn.query(`INSERT INTO serciveappointment VALUES('${service1}',(${thisAppointmentNo}))`
    ,
    (error, rows, fields) => {
        if (error) { console.log(error); }
        else {
            console.log('INSERT SUCCESS')
        }
    })

conn.end();