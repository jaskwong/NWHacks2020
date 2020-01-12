const port = 3000;
var express     = require("express"),
    app         = express();

var homeRoute		= require("./routes/home"),
    registerRoute	= require("./routes/register"),
    loginVolunteer  = require("./routes/loginVolunteer"),
    loginOrg      = require("./routes/loginOrg"),
    eventsRoute     = require("./routes/events")


app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.use("/", homeRoute);
app.use("/register", registerRoute);
app.use("/loginVolunteer", loginVolunteer);
app.use("/loginOrg", loginOrg);
app.use("/events", eventsRoute);


app.get('*', function (req, res) {
    res.send("The page is not avalible");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))