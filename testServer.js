
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
let clientNo =2;
let clientName='Henry';//we only save the name in the browser currently
let phone = localStorage.currentUserPhone;

conn.query(`SELECT a.appointmentNo, ser.serviceType, ser.serviceDescription, a.date, b.location
            FROM services ser, clients c, appointments a, branches b, serciveAppointment sa
            WHERE  ser.serviceType=sa.serviceType AND a.appointmentNo = sa.appointmentNo  AND a.clientNo = c.clientNo   AND a.clientNo = (SELECT clientNo FROM clients WHERE name='${clientName}' AND phone=${phone})   AND a.branchNo = b.branchNo
            ORDER BY a.date;`,
            (error,rows,fields)=>{
            if(error)
                console.log(error);
            
            for(r of rows)
                console.log(r);
            })


conn.end();