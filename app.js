var express     = require("express"),
    app         = express();

var homeRoute		= require("./routes/home"),
    registerRoute	= require("./routes/register"),
    loginRoute      = require("./routes/login"),
    eventsRoute     = require("./routes/events")


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.use("/", homeRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/events", eventsRoute);

app.get('*', function (req, res) {
    res.send("The page is not avalible");
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Server Has Started!");
});

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'nwhacks2020'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    var s = "DROP DATABASE nwhacks2020";
    con.query(s, function (err, result) {
        console.log("deleted");
    })
    var s = "CREATE DATABASE nwhacks2020";
    con.query(s, function (err, result) {
        if (err) throw err;
        console.log("created");
    })
});

// var execsql = require('execsql'),
//     dbConfig = {
//         host: 'localhost',
//         user: 'root',
//         password: 'nwhacks2020',
//         database: 'nwhacks2020'
//     },
//     sql = 'use db_cam;',
//     sqlFile = __dirname + '/public/db.sql';
// execsql.config(dbConfig)
//     .exec(sql)
//     .execFile(sqlFile, function (err, results) {
//         if (err) throw err;
//         console.log("ran script");
//     }).end();