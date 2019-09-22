const Sequelize = require('sequelize');
const UsersModel = require('./models/usersModel');



const sequelize = new Sequelize('PhotoIO', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    operatorsAliases: false,
    logging: false
});

const User = UsersModel(sequelize, Sequelize);

sequelize.sync({ force: true });

module.exports = User;
