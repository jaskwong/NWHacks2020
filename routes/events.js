var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'nwhacks2020',
    database: 'nwhacks2020'
});

var events;

con.connect(function (err) {
    var s = "SELECT * FROM events"
    con.query(s, function (err, res) {
        events = JSON.stringify(res)
        console.log(events)
        router.get('/', function (req, res) {
            res.render('events', {
                res: events
            })
        });

    })
})



// router.get("/", function(req, res){
//     res.render("events");
// });

module.exports = router;