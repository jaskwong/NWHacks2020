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