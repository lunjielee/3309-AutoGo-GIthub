
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


conn.query(`SELECT a.appointmentNo, c.licensePlate ,c.model, c.make, ser.serviceType, ser.serviceDescription, a.date
            FROM   appointments a, cars c, services ser,  serciveAppointment sa,  appointmentStaff astf
            WHERE c.licensePlate = a.licensePlate  AND a.appointmentNo = sa.appointmentNo AND ser.serviceType = sa.serviceType 
                AND a.appointmentNo = astf.appointmentNo AND astf.staffNo=1
            ORDER BY a.appointmentNo
            `,
    (error, rows, fields) => {
        if (error) { console.log(error); }
        else {
            console.log(rows)
        }

        for (r of rows) {
            console.log(r);
        }

    })


conn.end();