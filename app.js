var express     = require("express"),
    bodyParser 	= require("body-parser"),
    passport 	= require("passport"),
    app         = express();

const normalizePort = require('normalize-port');

var homeRoute		= require("./routes/home"),
    registerRoute	= require("./routes/register"),
    loginRoute      = require("./routes/login"),
    eventsRoute     = require("./routes/events");

var port = normalizePort(process.env.PORT || '3000');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + "/public"));

app.use(require("express-session")({
	secret:"nwplus",
	resave:false,
	saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());
// passport.use(new LocalStrategy(User.authenticate()));
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());


app.use("/", homeRoute);
app.use("/register", registerRoute);
app.use("/login", loginRoute);
app.use("/events", eventsRoute);

app.get('*', function (req, res) {
    res.send("The page is not avalible");
});

app.listen(port, process.env.IP, function(){
    console.log("The Server Has Started!");
});