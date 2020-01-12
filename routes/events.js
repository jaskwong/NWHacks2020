var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
    res.render("events");
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

module.exports = router;