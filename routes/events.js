var express = require("express");
var router = express.Router();
var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: "root",
    password: 'nwhacks2020',
    database: 'nwhacks2020'
});

// var events;

// con.connect(function (err) {
//     var s = "SELECT * FROM events"
//     con.query(s, function (err, res) {
//         events = JSON.stringify(res)
//         console.log(events)
//         router.get('/', function (req, res) {
//             res.render('events', {
//                 res: events
//             })
//         });
//     })
// })

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

// con.connect(function (err) {
//     var s = "SELECT * FROM events"
//     con.query(s, function (err, res) {
//         events = JSON.stringify(res)
//         console.log(events)
//         var s2 = "SELECT organization.o_name FROM events, organization WHERE events.o_usnm = organization.o_usnm"
//         con.query(s2, function (err2, res2) {
//             orgs = JSON.stringify(res2)
//             console.log(orgs)
//             result = {event: events, orgs: orgs}
//             console.log("result is: " + JSON.stringify(result))
//             router.get('/', function (req, res) {
//                 res.render('events', {
//                     res: result
//                 })
//             })
//         });
//     })
// })



// router.get("/", function(req, res){
//     res.render("events");
// });

module.exports = router;