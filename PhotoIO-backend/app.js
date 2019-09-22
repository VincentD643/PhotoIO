var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var logger = require('morgan');
var passport = require('passport');
const app = express();

const API_PORT = process.env.API_PORT || 5000;

require('./config/passport/passport');
const whitelist = [
    'http://localhost:3001',
    'http://localhost:3000',
    'http://localhost:3003',
];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(passport.initialize());

require('./routes/loginUser')(app);
require('./routes/registerUser')(app);
require('./routes/findUsers')(app);

app.listen(API_PORT, () => console.log('running'));

module.exports = app;