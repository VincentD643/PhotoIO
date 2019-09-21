const OrganismeDAO = (sequelize, type) => {
    return sequelize.define('organisme', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nom: type.STRING,
        adresse: type.STRING,
        tel: type.STRING,
        mail: type.STRING
    })
};

module.exports = OrganismeDAO;
