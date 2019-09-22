var bCrypt = require('bcrypt');
var jwtSecret = require('./jwtConfig');


const saltRound = 12;
const passport = require('passport'),
    localStrategy = require('passport-local').Strategy,
    User  = require('../../sequelize'),
    JWTstrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;

passport.use(
    'register',
    new localStrategy(
        {
            usernameField: 'username',
            passwordField: 'password',
            session: false,
        },
        (username, password, done) => {
            try{
                User.findOne({
                    where: {
                        username: username,
                    },
                }).then(user => {
                    if(user != null){
                        console.log("username is already taken");
                        return done(null, false, {message: "Username is already taken"});
                    }else{
                        bCrypt.hash(password, saltRound, function(err, hash) {
                            User.create({username, password: hash}).then(user => {
                                console.log("user added");
                                return done(null, user);
                            })
                        })
                    }
                })
            }catch(err){
                done(err);
            }
        }
    )
);
passport.use(
    'login',
    new localStrategy({
        usernameField: 'username',
        passwordField: 'password',
        session: 'false',
    },
        (username, password, done) => {
        try{
            User.findOne({
                where: {
                    username: username,
                },
            }).then(user => {
                if(user === null){
                    return done(null, false, {
                        message: 'This username doesnt exist'
                    })
                }else{
                    bCrypt.compare(password, user.password).then(response => {
                        if(response != true){
                            console.log("password dont match yo");
                            return done(null, false, {
                                message: "Wrong password"
                            });
                        }
                        console.log('user found & authenticated');
                        return done(null, user);
                    })
                }
            });
        }catch(err){
            done(err);
        }
        })
);
const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = jwtSecret.secret;

passport.use(
    'jwt',
    new JWTstrategy(opts, (jwt_payload, done) => {
        try{
            User.findOne({
                where: {
                    username: jwt_payload.id,
                },
            }).then(user => {
                if(user){
                    console.log("user found in db in passport");
                    done(null, user);
                }else{
                    console.log("user not found in db");
                    done(null, false);
                }
            })
        }catch(err){
            done(err);
        }
    })
);