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

const port = 3000

app.get('*', function (req, res) {
    res.send("The page is not avalible");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

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

var fs = require('fs');
var script = fs.readFileSync('./public/db.sql').toString();
var scriptarr = script.split(';')
console.log(scriptarr[1])


