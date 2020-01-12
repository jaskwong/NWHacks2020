require('dotenv').config()
const API_KEY = process.env.API_KEY
const normalizePort = require('normalize-port');
var express = require("express"),
    bodyParser = require("body-parser"),
    passport = require("passport"),
    app = express();

var homeRoute		= require("./routes/home"),
    volunteerRoute	= require("./routes/volunteer"),
    organizationRoute  = require("./routes/organization"),
    eventsRoute     = require("./routes/events")

var port = normalizePort(process.env.PORT || '3000');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
    secret: "nwplus",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


app.use("/", homeRoute);
app.use("/volunteer", volunteerRoute);
app.use("/organization", organizationRoute);
app.use("/events", eventsRoute);

app.get('*', function (req, res) {
    res.send("The page is not avalible");
});

app.listen(port, process.env.IP, () => console.log("Server is live now"));

var fs = require('fs');
var script = fs.readFileSync('./public/db.sql').toString();
const scriptarr = script.split(';')

var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'nwhacks2020',
    database: 'nwhacks2020'
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connected")
    scriptarr.pop();
    scriptarr.forEach(s => {
        con.query(s, function (err, result) {
            if (err) throw err;
        })
    });
});


