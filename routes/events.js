var express = require("express");
var router = express.Router();
var mysql = require('mysql');
var bodyParser = require('body-parser')
var app = express()

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'nwhacks2020',
    database: 'nwhacks2020'
});


var events;
var orgs;
var result;

    
router.get("/new", (req, res) => {
    res.render("newEvents");
});



router.use(bodyParser.urlencoded({ extended: true }))
router.use(bodyParser.json())

router.post("/new", (req, res) => {
    var s = "INSERT INTO events VALUES (" + (Math.floor(Math.random()*90000)+10000) + ", '" + req.body.Event_Address + "', TIMESTAMP ('" + req.body.Event_Time + "'), " + req.body.Event_Ppl + ", '" + req.body.Company_Usnm + "')"  
    con.query(s, function(err, res) {
        if (err) throw err;
        con.query("select * from events", function (err, res) {
            console.log(res)
        })
    })
    con.connect(function (err) {
        var s = "SELECT * FROM events"
        con.query(s, function (err, res) {
            events = JSON.stringify(res)
            var s2 = "SELECT organization.o_name FROM events, organization WHERE events.o_usnm = organization.o_usnm"
            con.query(s2, function (err2, res2) {
                orgs = JSON.stringify(res2)
                result = events + " SEP " + orgs
                console.log(result)
                router.get('/', function (req, res) {
                    res.render('events', {
                        res: JSON.stringify(result)
                    })
                });
            })
        })
    })
    res.redirect("/events");
});

router.get(":id", (req, res) => {
    res.send("You reached the more info page");
})

router.get(":id/edit", (req, res) => {
    res.send("you reached the edit events page");
})

router.put(":id", (req, res) => {
    res.send("You are trying to update this event");
})

router.delete(":id", (req, res) => {
    res.send("You are trying to delete this event");
})


con.connect(function (err) {
    var s = "SELECT * FROM events"
    con.query(s, function (err, res) {
        events = JSON.stringify(res)
        var s2 = "SELECT organization.o_name FROM events, organization WHERE events.o_usnm = organization.o_usnm"
        con.query(s2, function (err2, res2) {
            orgs = JSON.stringify(res2)
            result = events + " SEP " + orgs
            console.log(result)
            router.get('/', function (req, res) {
                res.render('events', {
                    res: JSON.stringify(result)
                })
            });
        })
    })
})


module.exports = router;