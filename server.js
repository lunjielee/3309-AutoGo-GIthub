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


// app.get('/api/get_result_list', function (req, res) {
//     conn = newConnection();
//     conn.connect();

//     conn.query("SELECT * FROM Appointments", (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.send(result);
//         }
//     })
// })


// app.post('/api/submit_result', function (req, res) {
//     console.log(req.body)
//     conn = newConnection();
//     conn.connect();
//     // Question mark to added up another layer of security
//     conn.query("INSERT INTO Appointments VALUES (?,?,?,?,?,?,?,?,?,?,?)", [req.body.name.toString(), req.body.option89.toString(), req.body.option910.toString(),
//     req.body.option1011.toString(), req.body.option1112.toString(), req.body.option1213.toString(),
//     req.body.option1314.toString(), req.body.option1415.toString(), req.body.option1516.toString(),
//     req.body.option1617.toString(), req.body.option1718.toString()]
//         , (error, rows, fields) => {
//             if (error) {
//                 // 1062 Duplicate entry error response from mysql, send 409 means conflict
//                 if (error.errno == 1062)
//                     res.sendStatus(409)
//                 console.log(error);
//             }
//             else
//                 res.send("200 OK");
//         })
// })


// app.post('/api/update_result', function (req, res) {
//     // First we check is it an root user who sent this post request
//     if (req.body.authUser == 'root') {
//         conn = newConnection();
//         conn.connect();
//         // Same question mark as above
//         conn.query("UPDATE Appointments SET option89=?, option910=?, option1011=?, option1112=?, option1213=?, option1314=?, option1415=?, option1516=?, option1617 =?, option1718 =? WHERE name = ?",
//             [req.body.option89.toString(), req.body.option910.toString(),
//             req.body.option1011.toString(), req.body.option1112.toString(), req.body.option1213.toString(),
//             req.body.option1314.toString(), req.body.option1415.toString(), req.body.option1516.toString(),
//             req.body.option1617.toString(), req.body.option1718.toString(), req.body.name.toString()]
//             , (error, rows, fields) => {
//                 if (error) {
//                     //Probably never reach this point, too lazy to remove this
//                     if (error.errno == 1062)
//                         res.sendStatus(409)
//                     console.log(error);
//                 }
//                 else
//                     res.send("200 OK");
//             })
//     } else {
//         // If not the root user, forbidden
//         res.sendStatus(403);
//     }
// })


app.post('/api/staff_login', function (req, res) {

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

// Listening to the port 8081
app.listen(8081,(req,res)=>{
    console.log('server is listening on port 8081');
});