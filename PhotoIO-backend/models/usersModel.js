const UserDAO = (sequelize, type) => {
    return sequelize.define('user', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        firstname: type.STRING,
        lastname: type.String,
        username: type.TEXT,
        about: type.TEXT,
        password: {
            type: type.String,
            allowNull: false
        },
        mail: {
            type :type.STRING,
            isEmail: true
        },
        last_login: type.DATE,
        status: {
            type: type.ENUM('active', 'inactive'),
            defaultValue: 'active'
        }
    })
};

module.exports = UserDAO;
