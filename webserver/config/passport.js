// loading up the required stratigies
const FacebookStrategy = require('passport-facebook').Strategy;
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const LocalStrategy = require('passport-local').Strategy;
// loading up the configuration file containing facebook and goole authentication configuration
var configAuth = require('./auth');
// load up the user model
const User = require('../models/user');
const RegisteredUser = require('../models/tempUserModel');
module.exports = function(passport) {
    // used to serialize the user for the session
    passport.serializeUser(function(user, done) {
        done(null, user);
    });
    // used to deserialize the user
    passport.deserializeUser(function(user, done) {
        done(null, user);
    });
    passport.use(new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        session: false,
        passReqToCallback: true
    }, function(req, email, password, done) {
        process.nextTick(function() {
            RegisteredUser.findOne({
                'email': email
            }, function(err, user) {
              if (err) {
            return done(err);
        }
        else if (!user) {
          console.log(user);
            const error = new Error('Your Email ID is not registered');
            error.name = 'You have not Register Yet ! Please SignUp first :)';
            return done(error.name);
        }
        else if(!user.verified){
          console.log(user);
            const error = new Error('Email ID is not Verified');
            error.name = 'Check your email for Login Verification !';
            return done(error.name);
        }
        else if (!(user.password === password)) {
          console.log(user);
            const error = new Error('Incorrect password');
            error.name = 'You Have Entered Incorrect password !';
            return done(error.name);
        }
       else {
            let userData = {};
            userData.email = user.email;
            userData.token = RegisteredUser.generateToken(userData.email);
            return done(null, userData);
         }
            });
        });
    }));
    // =========================================================================
    // FACEBOOK ================================================================
    // =========================================================================
    var fbStrategy = configAuth.FACEBOOK;
    fbStrategy.passReqToCallback = true; // allows us to pass in the req from our route (lets us check if a user is logged in or not)
    passport.use(new FacebookStrategy(fbStrategy, function(req, token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {
            // check if the user is already logged in
            if (!req.user) {
                User.findOne({
                    'facebook.id': profile.id
                }, function(err, user) {
                    if (err)
                        return done(err);
                    if (user) {
                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.facebook.token) {
                            user.facebook.token = token;
                            user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                            user.facebook.email = (profile.emails[0].value || '').toLowerCase();
                            user.facebook.photo = profile.photo;
                            user.save(function(err) {
                                if (err)
                                    return done(err);
                                return done(null, user);
                            });
                        }
                        return done(null, user); // user found, return that user
                    } else {
                        // if there is no user, create them
                        var newUser = new User();
                        newUser.facebook.id = profile.id;
                        newUser.facebook.token = token;
                        newUser.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                        newUser.facebook.email = (profile.emails[0].value || '').toLowerCase();
                        newUser.facebook.photo = profile.photo;
                        newUser.save(function(err) {
                            if (err)
                                return done(err);
                            return done(null, newUser);
                        });
                    }
                });
            } else {
                // user already exists and is logged in, we have to link accounts
                var user = req.user; // pull the user out of the session
                user.facebook.id = profile.id;
                user.facebook.token = token;
                user.facebook.name = profile.name.givenName + ' ' + profile.name.familyName;
                user.facebook.email = (profile.emails[0].value || '').toLowerCase();
                user.facebook.photo = profile.photo;
                user.save(function(err) {
                    if (err)
                        return done(err);
                    return done(null, user);
                });
            }
        });
    }));
    // Google
    passport.use(new GoogleStrategy({
        clientID: configAuth.GOOGLE.clientID, clientSecret: configAuth.GOOGLE.clientSecret, callbackURL: configAuth.GOOGLE.callbackURL,
        // allows us to pass in the req from our route (lets us check if a user is logged in or not)
        passReqToCallback: true
    }, function(req, token, refreshToken, profile, done) {
        // asynchronous
        process.nextTick(function() {
            // check if the user is already logged in
            if (!req.user) {
                User.findOne({
                    'google.id': profile.id
                }, function(err, user) {
                    if (err) {
                        return done(err);
                    }
                    if (user) {
                        // if there is a user id already but no token (user was linked at one point and then removed)
                        if (!user.google.token) {
                            user.google.token = token;
                            user.google.name = profile.displayName;
                            // pull the first email
                            user.google.email = (profile.emails[0].value || '').toLowerCase();
                            user.save(function(error) {
                                if (error) {
                                    return done(err);
                                }
                                let userData = {};
                                userData.email = user.google.email;
                                userData.token = User.generateToken(userData.email);
                                return done(null, userData);
                            });
                        }
                        let userData = {};
                        userData.email = user.google.email;
                        userData.name = user.google.name;
                        userData.token = User.generateToken(userData.email);
                        return done(null, userData);
                    } else {
                        var newUser = new User();
                        newUser.google.id = profile.id;
                        newUser.google.token = token;
                        newUser.google.name = profile.displayName;
                        // pull the first email
                        newUser.google.email = (profile.emails[0].value || '').toLowerCase();
                        newUser.save(function(error) {
                            if (error) {
                                return done(err);
                            }
                            let userData = {};
                            userData.email = newUser.google.email;
                            userData.token = User.generateToken(userData.email);
                            return done(null, userData);
                        });
                    }
                });
            } else {
                // user already exists and is logged in, we have to link accounts
                // pull the user out of the session
                let user = req.user;

                user.token = token;
                user.name = profile.displayName;
                // pull the first email
                user.email = (profile.emails[0].value || '').toLowerCase();

                let userData = {};
                userData.email = user.email;
                userData.token = User.generateToken(userData.email);
                return done(null, userData);

            }
        });
    }));
};
