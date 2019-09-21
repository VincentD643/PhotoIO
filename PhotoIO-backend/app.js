const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
var usersRouter = require('./routes/usersRoute')


const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors());

app.use('/user/', usersRouter);

var server = app.listen(5000, function () {
  console.log('Listening on port 5000')
});

module.exports = server;
