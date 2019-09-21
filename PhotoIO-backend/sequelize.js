const Sequelize = require('sequelize');
const UsersModel = require('./models/usersModel');
var passport = require('passport');


const sequelize = new Sequelize('PhotoIO', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
});

//const User = UsersModel(sequelize, Sequelize);
require('config/passport/passport.js')(passport, UsersModel);
sequelize.sync({ force: true });

module.exports.usr = User;
