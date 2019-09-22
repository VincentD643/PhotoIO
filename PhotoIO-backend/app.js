var express    = require('express')
var app        = express()
var passport   = require('passport')
var session    = require('express-session')
var bodyParser = require('body-parser')
var env        = require('dotenv').config()
var exphbs     = require('express-handlebars')
const Sequelize = require('sequelize');
const sequelize = new Sequelize('log210', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  logging: false
});


//For BodyParser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// For Passport
app.use(session({ secret: 'keyboard cat',resave: true, saveUninitialized:true})); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions


app.get('/', function(req, res){
  res.send('Welcome to Passport with Sequelize');
});


//Models
//var models = require("./models/");
var userModel = require('./models/usersModel');


//Routes
var authRoute = require('./routes/auth.js');


//load passport strategies
require('./config/passport/passport.js')(passport,userModel);
app.use('/auth', authRoute);

//Sync Database
const User = userModel(sequelize,Sequelize);
sequelize.sync({force: true});


app.set('port', 5000);
var server = app.listen(app.get('port'), function(){
  console.log("ALLLOO");
})

module.exports = server;
module.exports.usr = User;



    