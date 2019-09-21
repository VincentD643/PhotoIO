const express = require('express';
const cors = require('cors');
const bodyParser = require('body-parser');
var usersRouter = require('./routes/usersRoute');
var passport = require('passport');
var session = require('express-session');
var env = require('dotenv').load();
var models = require('models');
var authRoute = require('routes/auth');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(session({
  secret : 'NeverGonnaGiveYouUp',
  resave: true,
  saveUninitialized:true
})); //session secret
app.use(passport.initialize());
app.use(passport.session());
var authRoute = require('routes/auth')(app, passport);


var server = app.listen(5000, function () {
  console.log('Listening on port 5000')
});

module.exports = server;
