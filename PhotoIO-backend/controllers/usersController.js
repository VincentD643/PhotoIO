var m = require('../sequelize');
const User = m.user;

var UsersController = {
    GetUser: (req, res) => {
        var query;
        if (req.params.id) {
            query = User.findByPk(req.params.id);
        } else {
            query = User.findAll();
        }
        return query.then(orgs => res.json(orgs))
    },
    PostUser: (req, res) => {
        User.create(req.body)
            .then(org => {
                res.status(201).json(org)
            });
    },
    UpdateUser: (req, res) => {
        var data = req.body;
        User.findByPk(req.params.id).then(user => {
            user.nom = data.nom ? data.nom : user.nom;
            user.adresse = data.adresse ? data.adresse : user.adresse;
            user.tel = data.tel ? data.tel : user.tel;
            user.mail = data.mail ? data.mail : user.mail;
            return user.save({fields: ['nom','adresse','tel','mail','fax']});
        }).then(org => res.json(org));
    },
    DeleteUser: (req, res) => {
        User.destroy({
            where: {id: req.params.id}
        }).then(() => res.sendStatus(204))
    }
}

module.exports = UsersController
