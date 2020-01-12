var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'nwhacks2020',
    database: 'nwhacks2020'
});

router.get("/new",(req,res)=>{
	res.render("newEvents");
});

router.post("/new",(req,res)=>{
    //create new events and send that shit to MySQL 
	res.send("You reached the post event route");
});

router.get(":id",(req,res)=>{
    res.send("You reached the more info page");
})

router.get(":id/edit", (req,res)=>{
    res.send("you reached the edit events page");
})

router.put(":id", (req,res)=>{
    res.send("You are trying to update this event");
})

router.delete(":id", (req,res)=>{
    res.send("You are trying to delete this event");
})

var events;
var orgs;
var result;

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