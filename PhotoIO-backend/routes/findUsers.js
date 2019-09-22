var passport = require('passport');

module.exports = function(app) {
    app.get('/findUser', (req, res, next) => {
        passport.authenticate('jwt', {session: false}, (err, user, info) => {
            if(err){
                console.log(err);
            }
            if(info != undefined){
                console.log(info.message);
                res.send(info.message);
            }else{
                console.log("user found in db from route");
                res.status(200).send({
                    auth: true,
                    firstname: user.firstname,
                    lastname: user.lastname,
                    username: user.username,
                    about: user.about,
                    mail: user.mail,
                    password: user.password,
                    last_login: user.last_login,
                });
            }
        })(req, res, next)
    });
};
