var bCrypt = require('bcrypt-nodejs');
module.exports = function(passport, user){

       var User = user;
       var LocalStrategy = require('passport-local').Strategy;
       passport.serializeUser(function(user, done){
           done(null, user.id);
       });
        passport.deserializeUser(function(id, done){
            User.findById(id).then(function(user){
                if(user){
                    done(null, user.get());
                }else{
                    done(user.errors, null);
                }
            })
        });


        passport.use('local-signup', new LocalStrategy(
            {
                usernameField : 'email',
                passwordField: 'password',
                _passReqToCallback: true
            },
            function(req, email,password, done){
                var generateHash = function(password){
                    return bCrypt.hashSync(passwword, bCrypt.genSaltSync(8), null);
                };
                User.findOne({where: {email:email}}.then(function(user){
                    if(user){
                        return done(null, false, {message: 'This email is already taken'});
                    }else{
                        var userPassword = generateHash(password);
                        var userTemp = {
                            email: email,
                            password: userPassword,
                            firstname: req.body.firstname,
                            lastname: req.body.lastname
                        };
                        User.create(userTemp).then(function(req, res){
                            if(!req){
                                return done(null, false);
                            }else{
                                return done(null, req);
                            }

                        });
                    }
                }));
            }
        ));

        passport.use('local-signin', new LocalStrategy(
            {
                usernameField: 'email',
                passwordField: 'password',
                _passReqToCallback: true

            },
            function(req, email, password, done){
                var User = user;
                var isValidPassword = function(userpass, password){
                    return bCrypt.compareSync(password, userpass);
                }
                User.findOne({
                    where: {
                        email: email
                    }
                }).then(function(user){
                    if(!user){
                        return done(null, false, {
                            message: 'This email is not registed'
                        });
                    }
                    if(!isValidPassword(user.password, password)){
                        return done(null, false, {
                            message : 'Wrong password'
                        });
                    }
                    var userInfo = user.get();
                    return done(null, userInfo);
                }).catch(function(err){
                    console.log("oops : ", err );
                    return done(null, false, {
                        message: "Something bad is happening please call 911"
                    });
                });
            }
        ));

};

