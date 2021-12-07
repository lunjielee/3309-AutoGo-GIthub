const express = require('express');
const app = express();
const newConnection = require('./DBConnector');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path');
const e = require('express');

app.use(express.urlencoded({
    extended: true
}))
app.use(cors())
app.use(express.json())
app.use(express.static('build'))
// Not used
app.use(cookieParser("D7C84966-88F9-4BF7-8805-9FBADDFAAA9F"))


app.post('/api/add_appointment', function (req, res) {
    conn = newConnection();
    conn.connect();

    const date = req.body.date;
    const branchNo = parseInt(req.body.branchNo);
    const clientNo = req.body.clientNo;
    const licensePlate = req.body.licensePlate;
    const service1 = req.body.service1;
    const service2 = req.body.service2;
    const service3 = req.body.service3;
    const service4 = req.body.service4;
    const thisAppointmentNo = `SELECT appointmentNo FROM appointments WHERE date='${date}' AND branchNO=${branchNo} AND clientNo=${clientNo} AND licensePlate='${licensePlate}'`;

    conn.query("INSERT INTO appointments VALUES (?,?,?,?,?)", ['NULL', date, branchNo, clientNo, licensePlate],
        (error, rows, fields) => {
            if (error) {
                console.log(error);
            }
            else {
                res.send('INSERT Appointment Success');//next update serciveappointment table
                if (service1 !== '') {
                    conn.query(`INSERT INTO serciveappointment VALUES('${service1}',(${thisAppointmentNo}))`
                        ,
                        (error, rows, fields) => {
                            if (error) {
                                conn.end()
                                console.log(error);
                            }
                            else {
                                conn.end()
                                console.log('INSERT service1 SUCCESS')
                            }
                        })
                }
                if (service2 == 'car wash' || service2 == 'inspection' || service2 == 'maintenance' || service2 == 'tire change') {
                    conn.query(`INSERT INTO serciveappointment VALUES('${service2}',(${thisAppointmentNo}))`
                        ,
                        (error, rows, fields) => {
                            if (error) {
                                conn.end()
                                console.log(error);
                            }
                            else {
                                console.log('INSERT service2 SUCCESS')
                                conn.end()
                            }
                        })
                }
                if (service3 == 'car wash' || service3 == 'inspection' || service3 == 'maintenance' || service3 == 'tire change') {
                    conn.query(`INSERT INTO serciveappointment VALUES('${service3}',(${thisAppointmentNo}))`
                        ,
                        (error, rows, fields) => {
                            if (error) {
                                conn.end()
                                console.log(error);
                            }
                            else {
                                conn.end()
                                console.log('INSERT service3 SUCCESS')
                            }
                        })
                }
                if (service4 == 'car wash' || service4 == 'inspection' || service4 == 'maintenance' || service4 == 'tire change') {
                    conn.query(`INSERT INTO serciveappointment VALUES('${service4}',(${thisAppointmentNo}))`
                        ,
                        (error, rows, fields) => {
                            if (error) {
                                conn.end()
                                console.log(error);
                            }
                            else {
                                conn.end()
                                console.log('INSERT service4 SUCCESS')
                            }
                        })
                }

            }
        })
})

app.post('/api/staff_show_branchAppointment', function (req, res) {
    conn = newConnection();
    conn.connect();

    const branchNo = req.body.branchNo

    conn.query(`SELECT c.licensePlate, c.color, c. model, c.make, b.branchNo
    FROM appointments a, branches b, cars c
    WHERE b.branchNo = a.branchNo
    AND c.licensePlate = a.licensePlate
    AND b.branchNo='${branchNo}'`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(eror);
            }
            else {
                conn.end()
                res.send(rows)
            }
        })
})

app.post('/api/staff_view_branchRevenue', function (req, res) {
    conn = newConnection();
    conn.connect();

    const dateFrom = req.body.dateFrom
    const dateTo = req.body.dateTo
    //2021-08-20 10:00:00
    conn.query(`SELECT b.branchNo, b.location, SUM(ser.price) as totalPayment
    FROM services ser, clients c, appointments a, branches b, serciveAppointment sa
    WHERE ser.serviceType=sa.serviceType AND a.appointmentNo = sa.appointmentNo
    AND a.clientNo = c.clientNo AND a.branchNo = b.branchNo
    AND date >= '${dateFrom}' AND date <= '${dateTo}'
    GROUP BY b.branchNo
    ORDER BY a.appointmentNo`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            }
            else {
                conn.end()
                res.send(rows)
            }

        })
})

app.post('/api/staff_location', function (req, res) {
    conn = newConnection();
    conn.connect();
    const branchNo = req.body.branchNo;
    console.log(req.body);


    conn.query(`SELECT s.name, s.position, b.location
                FROM staffs s, branches b
                WHERE s.branchNo = b.branchNo AND b.branchNo= ('${branchNo}')`,

        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            }
            else {
                conn.end()
                res.send(rows);
            }

        }

    )

})

app.post('/api/staff_view_appointment', function (req, res) {
    conn = newConnection();
    conn.connect();

    const userName = req.body.userName
    const password = req.body.password

    conn.query(`SELECT a.appointmentNo, c.licensePlate ,c.model, c.make, ser.serviceType, ser.serviceDescription, a.date
                    FROM   appointments a, cars c, services ser,  serciveAppointment sa,  appointmentStaff astf
                    WHERE c.licensePlate = a.licensePlate  AND a.appointmentNo = sa.appointmentNo AND ser.serviceType = sa.serviceType 
                          AND a.appointmentNo = astf.appointmentNo AND astf.staffNo=(SELECT staffNo FROM staffs WHERE name = '${userName}' AND password = '${password}')
                    ORDER BY a.appointmentNo
                `,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            }
            else {
                conn.end()
                res.send(rows);
            }
        })
})

app.post('/api/staff_show_clientProfile', function (req, res) {
    conn = newConnection();
    conn.connect();

    const clientNo = req.body.clientNo

    conn.query(`SELECT * FROM clients Where clientNo='${clientNo}'`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            } else {
                conn.end()
                res.send(rows);
            }
        })
})

app.post('/api/guest_find_item', function (req, res) {
    conn = newConnection();
    conn.connect();

    const itemNo = req.body.itemNo

    conn.query(`SELECT ac.item, ac.price, b.location, acb.inventory
                FROM accessories ac, branches b, accessorybranch acb
                WHERE ac.item = '${itemNo}' AND b.branchNo = acb.branchNo AND ac.item = acb.item
                ORDER BY ac.price`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            } else {
                conn.end()
                res.send(rows);
            }
        })
})

app.post('/api/guest_view_appointment', function (req, res) {
    conn = newConnection();
    conn.connect();

    const userName = req.body.userName
    const password = req.body.password

    conn.query(`SELECT a.appointmentNo, ser.serviceType, ser.serviceDescription, a.date, b.location
                FROM services ser, clients c, appointments a, branches b, serciveAppointment sa
                WHERE ser.serviceType=sa.serviceType AND a.appointmentNo = sa.appointmentNo  AND a.clientNo = c.clientNo   AND a.clientNo = (SELECT clientNo FROM clients WHERE name='${userName}' AND password='${password}')   AND a.branchNo = b.branchNo
                ORDER BY a.date;`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            }
            else {
                conn.end()
                res.send(rows);
            }

        })
})

app.post('/api/guest_delete_appointment', function (req, res) {
    conn = newConnection();
    conn.connect();

    const appointmentNo = req.body.appointmentNo

    conn.query(`DELETE FROM appointments WHERE appointmentNo=${appointmentNo};`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            }
            else {
                conn.end()
                res.send('DELETE appointment SUCCESS');
            }

        })
})

app.post('/api/guest_view_receipt', function (req, res) {
    conn = newConnection();
    conn.connect();

    const appointmentNo = req.body.appointmentNo

    conn.query(`SELECT a.appointmentNo, c.name as clientName,  a.date, b.location, SUM(ser.price) as totalPayment
                FROM  services ser, clients c, appointments a, branches b, serciveAppointment sa
                WHERE ser.serviceType=sa.serviceType AND a.appointmentNo = sa.appointmentNo AND a.appointmentNo = ${appointmentNo}  AND a.clientNo = c.clientNo AND a.branchNo = b.branchNo
                GROUP BY a.appointmentNo 
                ORDER BY a.appointmentNo;`,
        (error, rows, fields) => {
            if (error) {
                conn.end()
                console.log(error);
            }
            else {
                conn.end()
                res.send(rows);
            }

        })
})

app.post('/api/staff_signup', function (req, res) {
    conn = newConnection();
    conn.connect();

    if (req.body.signupType == 'staff') {
        const username = req.body.username
        const password = req.body.password
        const position = req.body.position
        const branchNo = req.body.branchNo

        //NULL is for the PK in staffs table
        conn.query("INSERT INTO staffs VALUES (?,?,?,?,?)", ['NULL', username, password, position, branchNo]
            , (error, rows, fields) => {
                if (error) {
                    conn.end()
                    console.log(error)
                } else {
                    console.log(req.body.username + ' ' + req.body.password + ' ' + req.body.position + ' ')
                    conn.end()
                    res.send("200 OK");
                }
            })
    }
})

app.post('/api/guest_signup', function (req, res) {
    conn = newConnection();
    conn.connect();

    if (req.body.signupType == 'guest') {
        const username = req.body.username
        const password = req.body.password
        const address = req.body.address
        const phone = req.body.phone

        //NULL is for the PK in clients table
        conn.query("INSERT INTO clients VALUES (?,?,?,?,?)", ['NULL', username, password, address, phone]
            , (error, rows, fields) => {
                if (error) {
                    console.log(error)
                    conn.end()
                } else {
                    console.log(req.body.username + ' ' + req.body.password)
                    conn.end()
                    res.send("200 OK");
                }
            })
    }
})

app.post('/api/staff_login', function (req, res) {
    conn = newConnection();
    conn.connect();

    if (req.body.loginType == 'staff') {
        const userName = req.body.usr
        const password = req.body.pwd
        //check if the staff is in our DB
        if (userName && password) {
            conn.query('SELECT * FROM staffs WHERE name = ? AND password = ?', [userName, password], (error, results) => {
                if (error) {
                    console.log(error)
                }
                if (results) {
                    if (results.length > 0) {
                        res.cookie('user', userName);
                        res.cookie('password', password, { signed: true, maxAge: 10 * 60 * 1000 });
                        // Send the logged in staff data
                        conn.end()
                        res.send(results);
                    }
                    res.end();
                }
            })
        }
    }
})

app.post('/api/guest_login', function (req, res) {

    conn = newConnection();
    conn.connect();

    if (req.body.loginType == 'guest') {
        const userName = req.body.usr
        const password = req.body.pwd
        //check if the guest is in our DB
        if (userName && password) {
            conn.query('SELECT * FROM clients WHERE name = ? AND password = ?', [userName, password], (error, results) => {
                if (error) {
                    conn.end()
                    console.log(error)
                }
                if (results) {
                    if (results.length > 0) {
                        res.cookie('user', userName);
                        res.cookie('password', password, { signed: true, maxAge: 10 * 60 * 1000 });
                        // Send logged in client data
                        conn.end()
                        res.send(results);
                    }
                }
                res.end();
            });
        }
    }
})


// It is safe to remove this I believe
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/build/index.html');
})

app.get('*', function (request, response) {
    response.sendFile(path.resolve(__dirname, 'build', 'index.html'))
})

app.listen(8081, (req, res) => {
    console.log('server is listening on port 8081');
});