var RegisteredUser = require('../models/tempUserModel');
var nodemailer = require('nodemailer');
var rand,
    mailOptions,
    host,
    link;
module.exports = function(app, passport) {
    function isLoggedIn(req, res, next) {

        // if user is authenticated in the session, carry on
        if (req.isAuthenticated()) {
            console.log("req is authenticated!");
            return next();
        }
        console.log("not authen");
        res.json({'logged': false});
        // if they aren't redirect them to the home page
        // res.redirect('/');
    }

    // local login route
    app.post('/login', passport.authenticate('local'), function(req, res) {
        console.log(req.user);
        res.send(req.user)

    });
    //logout
    app.get('/signout', function(req, res) {
        console.log('**********************************');
        console.log(req.user);
        req.logout();
        res.send('Successfully Logged out');
    });

    /*LOCAL SIGNUP*/
    // local sign up route
    app.post('/signup', function(req, res) {
        var newUser = new RegisteredUser();
        rand = Math.floor((Math.random() * 100) + 54);
        newUser.verificationID = rand;
        console.log(rand + '' + newUser.verificationID);
        newUser.name = req.body.firstName + " " + req.body.lastName;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.firstname = req.body.firstName;
        newUser.lastname = req.body.lastName;

        if (req.body.userType) {
            newUser.type = 'Admin';
        } else {
            newUser.type = 'Customer';
        }
        newUser.isEmailVerified = false;
        newUser.save(function(err) {
            if (err) {
                res.send('Error in registration');
            } else {
                res.send("Successfully registered");
                //res.send('registered');
            }
        });
    });
    app.post('/adminsignup', function(req, res) {
        var newUser = new RegisteredUser();
        rand = Math.floor((Math.random() * 100) + 54);
        newUser.name = req.body.firstName + " " + req.body.lastName;
        newUser.email = req.body.email;
        newUser.password = req.body.password;
        newUser.firstname = req.body.firstName;
        newUser.lastname = req.body.lastName;
        newUser.type = req.body.type
        newUser.isEmailVerified = true;
        newUser.verificationID = rand;
        newUser.save(function(err) {
            if (err) {
                res.send('Error in registration');
            } else {
                res.send("Successfully registered");
                //res.send('registered');
            }
        });
    });

    app.get('/view', function(req, res, next) {
        RegisteredUser.find({}, function(err, alldetails) {
            if (err) {
                res.send(err);
                console.log('error ocuured');
            } else {
                res.send(alldetails);
            }
        });
    });

    app.get('/', function(req, res) {
        res.sendfile('index.html');
    });

    /*------------------Routing Started ------------------------*/
    /*------------------Verifiocation Mail send to the mail------------------------*/
    var host,
        link,
        mailOptions;
    app.post('/send', function handleSayHello(req, res) {
        console.log(req.body.data);
        RegisteredUser.find({
            email: req.body.data
        }, function(err, profile) {

            if (err) {
                res.send(err);
                console.log('error ocuured');

            } else {
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    secure: false,
                    auth: {
                        user: 'geniegenie0001@gmail.com', // Your email id
                        pass: 'genie123' // Your password
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });

                host = req.get('host');
                console.log(profile);
                link = "http://" + req.get('host') + "/verify?id=" + profile[0].verificationID + "&email=" + profile[0].email;
                var text = 'Hello from \n\n' + req.body.data;
                mailOptions = {
                    from: 'geniegenie0001@gmail.com', // sender address
                    to: profile[0].email, // list of receivers
                    subject: 'Verification Email', // Subject line
                    text: text,
                    html: "Welcome to Genie ,<br> Please Click on the link to verify your email.<br><a href=" + link + ">Click here to verify</a>"
                };
                console.log(mailOptions + host);
                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        console.log(error);
                        res.json({
                            yo: 'error' + error
                        });
                    } else {
                        console.log('Message sent: ' + info.response);
                        res.json({yo: info.response});
                    }
                });
            }
        });

    });
    /*verify the link which sent to  user email*/
    app.get('/verify', function(req, res) {
        RegisteredUser.find({
            email: req.query.email
        }, function(err, profile) {

            if (err) {
                res.send(err);
                console.log('error occured');
            } else {
                console.log(req.protocol + ":/" + req.get('host') + ":" + ("http://" + host));
                if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
                    console.log("Domain is matched. Information is from Authentic email");
                    if (req.query.id == profile[0].verificationID) {
                        console.log("email is verified");
                        RegisteredUser.update({
                            email: req.query.email
                        }, {
                            $set: {
                                isEmailVerified: true,
                                verificationID: 0
                            }
                        }, function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Account Verified and Changed to true");
                            }
                        });
                        res.redirect('/#/clienthome?email=' + req.query.email);
                    } else {
                        console.log("email is not verified");
                        //res.end("<h1>Link expired</h1>");
                        res.redirect('/#/expiryLink');
                    }
                } else {
                    res.end("<h1>Request is from unknown source");
                }
            }
        });
    });
    //send verification link to the user mail for forgotpassword
    app.post('/forgetpassword', function password(req, res) {
        rand = Math.floor((Math.random() * 100) + 54);
        RegisteredUser.update({
            email: req.body.email
        }, {
            $set: {
                verificationID: rand
            }
        }, function(err) {
            if (err) {
                console.log(err);
                console.log("error :(");
            } else {
                console.log("id changed");
            }
        });
        console.log(req.body.email);
        RegisteredUser.find({
            email: req.body.email
        }, function(err, profile) {
            if (err) {
                res.send(err);
                console.log('not registered sign up please');
            } else {
                console.log(profile);
                var transporter = nodemailer.createTransport({
                    service: 'Gmail',
                    secure: false,
                    auth: {
                        user: 'geniegenie0001@gmail.com', // Your email id
                        pass: 'genie123' // Your password
                    },
                    tls: {
                        rejectUnauthorized: false
                    }
                });
                host = req.get('host');
                link = "http://" + req.get('host') + "/newPassword?id=" + rand + "&email=" + profile[0].email;
                mailOptions = {
                    from: 'geniegenie0001@gmail.com', // sender address
                    to: profile[0].email, // list of receivers
                    subject: 'Verification Email from Genie', // Subject line
                    html: "Forgot Password,<br> Please Click on the link to set new password.<br><a href=" + link + ">Click here to change password</a>"
                };
                console.log(mailOptions);
                transporter.sendMail(mailOptions, function(error, info) {
                    if (error) {
                        console.log(error);
                        res.json({
                            yo: 'error' + error
                        });
                    } else {
                        console.log('Message sent: ' + info.response);
                        res.json({yo: info.response});
                    };
                });
            }
        });
    });
    /*verify the link which sent to  user email for forgotpassword*/
    app.get('/newPassword', function(req, res) {
        RegisteredUser.find({
            email: req.query.email
        }, function(err, profile) {
            if (err) {
                res.send(err);
                console.log('error occured');
            } else {
                if (profile[0].verificationID != 0) {
                    res.redirect('/#/newpassword?id=' + req.query.id);
                } else {
                    console.log("email is not verified");
                    //res.end("<h1>Link expired</h1>");
                    res.redirect('/#/expiryLink');
                }
            }
        });
    });
    app.post('/updatepassword', function(req, res) {
        RegisteredUser.find({
            verificationID: req.body.id
        }, function(err, profile) {
            if (err) {
                res.send(err);
                console.log('error occured');
            } else {
                console.log(req.protocol + ":/" + req.get('host') + ":" + ("http://" + host));
                if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
                    console.log("Domain is matched. Information is from Authentic email");
                    console.log("req.body.id" + req.body.id);
                    console.log("verificationId" + profile[0].verificationID);
                    if (profile[0].verificationID != 0) {
                        console.log("email is verified");
                        RegisteredUser.update({
                            verificationID: req.body.id
                        }, {
                            $set: {
                                password: req.body.pass,
                                verificationID: 0
                            }
                        }, function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Account Verified and password was changed");
                                res.redirect('/#/');
                            }
                        });
                    } else {
                        console.log("email is not verified");
                        //res.end("<h1>Link expired</h1>");
                        res.redirect('/#/expiryLink');
                    }
                } else {
                    res.end("<h1>Request is from unknown source");
                }
            }
        });
    });
    //check whether the user already exists or not during signup
    app.post('/checkuser', function(req, res) {
        RegisteredUser.find({
            email: req.body.email
        }, function(err, profile) {
            if (profile.length) {
                console.log(req.body.email);
                console.log(profile.length);
                res.json({'userexists': true});
            } else {
                console.log(req.body.email);
                console.log(profile.length);
                res.json({'userexists': false});
            }
            if (err) {
                res.send(err);
            }
        });
    });

    //profileupdation
    app.put('/updateprofile', function(req, res) {
        if (req.body) {
            request1 = req.body.email;
            request2 = req.body.firstname + " " + req.body.lastname;
            request3 = req.body.firstname;
            request4 = req.body.lastname;
            RegisteredUser.update({
                'email': request1
            }, {
                $set: {
                    'name': request2,
                    'firstname': request3,
                    'lastname': request4
                }
            }, function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("updated Successfully");
                }
            });
        }
    });
    //reset password
    app.put('/resetpassword', function(req, res) {
        if (req.body) {
            request1 = req.body.email;
            request2 = req.body.password;
            RegisteredUser.update({
                'email': request1
            }, {
                $set: {
                    'password': request2
                }
            }, function(err) {
                if (err) {
                    res.send(err);
                } else {
                    res.send("Password changed Successfully");
                }
            });
        }
    });
    // customer Information
    app.get('/clientinformation', function(req, res) {
        let email = req.user.email;
        RegisteredUser.find({
            'email': email
        }, function(err, profile) {
            res.send(profile);
            if (err) {
                res.send(err);
            }
        });
    });

    // *******************************************
    // Facebook authentication routes
    // *******************************************
    // send to facebook to do the authentication

    app.get('/auth/facebook', passport.authenticate('facebook', {scope: 'email'}));

    // handle the callback after facebook has authenticated the user
    app.get('/auth/facebook/callback', passport.authenticate('facebook', {
        successRedirect: '/#/clienthome',
        failureRedirect: '/#/'
    }));

    app.get('/userinfo', function(req, res) {
        res.send({displayName: req.user.facebook.name, email: req.user.facebook.email, token: req.user.facebook.token})
    });

    // *******************************************
    // Google authentication routes
    // *******************************************
    //  send to google to do the authentication
    app.get('/auth/google', passport.authorize('google', {
        scope: ['profile', 'email']
    }));

    // the callback after google has authorized the user
    app.get('/auth/google/callback', passport.authenticate('google', {
        successRedirect: '/#/clienthome',
        failureRedirect: '/#/'
    }));
    /*    app.get('/userinformation', function(req, res) {
      console.log(req.user);
        res.send({displayName: req.user.name, email: req.user.email})
    }); */
}
