var express = require("express");
var router  = express.Router();


router.get("/", function(req, res){
    res.render("register");
});

router.post("/", (req,res)=>{
    //Mysql pushes new user into user table and authorize the session
    //If everything goes well redirect to events page, if err, send an error page
    res.send("You reached the post route");
});

module.exports = router;