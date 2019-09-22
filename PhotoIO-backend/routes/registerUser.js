var User =  require( '../sequelize');
var passport = require('passport');
module.exports = function(app) {
    app.post('/registerUser', (req, res, next) => {
        passport.authenticate('register', (err, user, info) => {
            if(err){
                console.log(err);
            }
            if(info != undefined){
                console.log(info.message);
                res.send(info.message);
            }else{
                console.log('4');
                req.logIn(user, err => {
                    const data = {
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        username: req.body.username,
                        about: req.body.about,
                        mail: req.body.mail,
                    };
                    User.findOne({
                        where: {
                            username: data.username,
                        },
                    }).then(user => {
                        user.update({
                            firstname: data.firstname,
                            lastname: data.lastname,
                            mail: data.mail,
                        }).then(() => {
                            console.log('user created in db');
                            res.status(200).send({
                                message: 'user created'
                            })
                        })
                    })
                })
            }
        })(req, res, next);
    });
};