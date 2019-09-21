var express = require('express');
var router = express.Router();
var passport = require('passport');

var authController = require('../controllers/authcontroller');
module.exports = function(app, passport){
    app.get('/dashboard', isLoggedIn, authController.Dashboard());
    app.get('/signin', authController.SignIn());
    app.get('/signup', authController.SignUp());
    app.get('/logout', authController.LogOut());
    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/dashboard', //to change to route
        failureRedirect: '/signup'
    }));
    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/dashboard',
        failureRedirect: '/signin'
    }));
    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();

        res.redirect('/signin');
    }
};




module.exports = router;
