const express = require('express');
const app = express();
const newConnection = require('./DBConnector');
const cors = require('cors')
const cookieParser = require('cookie-parser');
const path = require('path')

// Fix some strange bugs
app.use(express.urlencoded({ 
    extended: true
}))
app.use(cors())
app.use(express.json())
app.use(express.static('build'))// @lil explain!
// Not used
app.use(cookieParser("D7C84966-88F9-4BF7-8805-9FBADDFAAA9F"))

// app.post('/api/submit_result', function (req, res) {
//     console.log(req.body)
//     conn = newConnection();
//     conn.connect();
    // Question mark to added up another layer of security
    // conn.query("INSERT INTO Appointments VALUES (?,?,?,?,?,?,?,?,?,?,?)", [req.body.name.toString(), req.body.option89.toString(), req.body.option910.toString(),
    // req.body.option1011.toString(), req.body.option1112.toString(), req.body.option1213.toString(),
    // req.body.option1314.toString(), req.body.option1415.toString(), req.body.option1516.toString(),
    // req.body.option1617.toString(), req.body.option1718.toString()]
    //     , (error, rows, fields) => {
    //         if (error) {
    //             // 1062 Duplicate entry error response from mysql, send 409 means conflict
    //             if (error.errno == 1062)
    //                 res.sendStatus(409)
    //             console.log(error);
    //         }
    //         else
    //             res.send("200 OK");
    //     })
// })


app.post('/api/staff_signup', function (req, res) 
{
    conn = newConnection();
    conn.connect();

})

app.post('/api/guest_signup', function (req, res) 
{
    conn = newConnection();
    conn.connect();

    if (req.body.signupType == 'guest') 
    {
        const userName=req.body.username
        const password = req.body.password
        const address = req.body.address
        const phone = req.body.phone

        // //NULL is for the PK
        // conn.query("INSERT INTO clients VALUES (?,?,?,?,?)", [NULL,userName,password,address,phone]
        // ),(error, rows, fields) => 
        // {
        //     if(error)
        //     {
        //         console.log(error)
        //     }else
        //     {
        //         res.send("200 OK");
        //     }
        // }

        conn.query(/*`INSERT INTO Client VALUES (NULL,${userName},${password},${address},${phone})`*/
        // 'INSERT INTO clients VALUES (?,?,?,?,?)', [NULL,userName,password,address,phone]
        `INSERT INTO Client values (NULL,'Henry','123','address',5171801935)`
        ),(error, rows, fields) => 
        {
            if(error)
                console.log(error);
            else
                console.log('One Row Inserted');  
        }
    }
})

app.post('/api/staff_login', function (req, res) 
{

    conn = newConnection();
    conn.connect();

    if (req.body.loginType == 'staff') {
        const userName = req.body.usr
        const password = req.body.pwd
        //check if the staff is in our DB
        if (userName && password) {
            conn.query('SELECT * FROM staffs WHERE name = ? AND password = ?',[userName, password],(error, results)=>{
                if (results.length > 0) {
                    res.cookie('user', userName);
                    res.cookie('password', password,{ signed: true, maxAge: 10 * 60 * 1000 });
                    // Send our auth token
                    res.send("staff-ok");
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
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
            conn.query('SELECT * FROM clients WHERE name = ? AND password = ?',[userName, password],(error, results)=>{
                if (results.length > 0) {
                    res.cookie('user', userName);
                    res.cookie('password', password,{ signed: true, maxAge: 10 * 60 * 1000 });
                    // Send our auth token
                    res.send("guest-ok");
                } else {
                    res.send('Incorrect Username and/or Password!');
                }			
                res.end();
            });
        } else {
            res.send('Please enter Username and Password!');
            res.end();
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

app.listen(8081,(req,res)=>{
    console.log('server is listening on port 8081');
});