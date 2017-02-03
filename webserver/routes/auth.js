var RegisteredUser = require('../models/user');
var UnansweredQuery = require('../models/unansweredQuery');
var nodemailer = require('nodemailer');

module.exports = function(app, passport) {
  var rand,
      mailOptions,
      host,
      link;

      function isLoggedIn(req, res, next) {
      if (req.isAuthenticated())
          return next();
      res.redirect('/#/');
  }

    app.post('/login', passport.authenticate('local',{
      failureRedirect : '/'
    }), (req, res)=> {
      res.cookie('token', req.user.token);
      res.cookie('username',req.user.name);
      res.cookie('authType', req.user.authType);
      res.send(req.user)
    });
    //logout
    app.get('/signout', function(req, res) {
       //request=req.user.email;
        //newUser.loggedinStatus = false;
        res.clearCookie('token');
        res.clearCookie('authType');
        res.clearCookie('username');
        res.json({logout:"Successfully LogOut"});
        RegisteredUser.update({
            'local.email':req.user.local.email
        }, {
            $set: {
                'local.loggedinStatus': false
            }
        }, function(err) {
            if (err) {
                console.log("status not updated");
            } else {
              req.logout();

                // res.send('Successfully Logged out');
            }
        });
    });
    /*LOCAL SIGNUP*/
    // local sign up route
    app.post('/signup', function(req, res) {
        var newUser = new RegisteredUser();
        rand = Math.floor((Math.random() * 100) + 54);
        console.log(rand);
        console.log(req.body);
        //console.log(RegisteredUser.local+"Registered");
        //console.log(newUser.facebook.name+"newUser112121221");
        newUser.local.verificationID = rand;
        newUser.local.name = req.body.firstName + " " + req.body.lastName;
        newUser.local.email = req.body.email;
        newUser.local.password = req.body.password;
        newUser.local.firstname = req.body.firstName;
        newUser.local.lastname = req.body.lastName;
        newUser.local.localType = 'Customer';
        newUser.local.authType = 'local';
        //console.log(newUser.local.type);
        newUser.local.loggedinStatus = false;
        newUser.local.isEmailVerified = false;
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
        newUser.local.name = req.body.firstName + " " + req.body.lastName;
        newUser.local.email = req.body.email;
        newUser.local.password = req.body.password;
        newUser.local.firstname = req.body.firstName;
        newUser.local.lastname = req.body.lastName;
        newUser.local.localType = 'Admin';
        newUser.local.isEmailVerified = true;
        newUser.local.verificationID = rand;
        newUser.local.authType = 'local';
        newUser.save(function(err) {
            if (err) {
                res.send('Error in registration');
            } else {
                res.send(newUser.local.email+"jjjjj"+newUser.local.type+" "+newUser.local.verificationID);
                console.log(newUser.local.email+"jjjjj");
                //res.send('registered');
            }
        });
    });
    //admin view the users
    app.get('/viewall', function(req, res) {
        RegisteredUser.find(
          {'local.localType': 'Customer'}, function(err, alldetails) {
            if (err) {
                res.send(err);
                console.log('error ocuured');
            } else {
              console.log(alldetails);
                res.send(alldetails);
            }
        });
    });
    //view unanswered query
    app.get('/viewquery', function(req, res) {
        UnansweredQuery.find({}, function(err, alldetails) {
            if (err) {
                res.send(err);
                console.log('error ocuured');
            } else {
                res.send(alldetails);
            }
        });
      });
    /*------------------Routing Started ------------------------*/
    /*------------------Verifiocation Mail send to the mail------------------------*/
    var host,
        link,
        mailOptions;
    app.post('/send', function handleSayHello(req, res) {
        console.log(req.body.data);
        RegisteredUser.find({
            'local.email': req.body.data
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
                link = "http://" + req.get('host') + "/verify?id=" + profile[0].local.verificationID + "&email=" + profile[0].local.email;
                var text = 'Hello from \n\n' + req.body.data;
                mailOptions = {
                    from: 'geniegenie0001@gmail.com', // sender address
                    to: profile[0].local.email, // list of receivers
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
            'local.email': req.query.email
        }, function(err, profile) {

            if (err) {
                res.send(err);
                console.log('error occured');
            } else {
                console.log(req.protocol + ":/" + req.get('host') + ":" + ("http://" + host));
                if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
                    console.log("Domain is matched. Information is from Authentic email");
                    if (req.query.id == profile[0].local.verificationID) {
                        console.log("email is verified");
                        RegisteredUser.update({
                            'local.email': req.query.email
                        }, {
                            $set: {
                                'local.isEmailVerified': true,
                                'local.verificationID': 0
                            }
                        }, function(err) {
                            if (err) {
                                console.log(err);
                            } else {
                                console.log("Account Verified and Changed to true");
                            }
                        });
                        res.redirect('/#/successfullyregistered');
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
            'local.email': req.body.email
        }, {
            $set: {
                'local.verificationID': rand
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
            'local.email': req.body.email
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
                link = "http://" + req.get('host') + "/newPassword?id=" + rand + "&email=" + profile[0].local.email;
                mailOptions = {
                    from: 'geniegenie0001@gmail.com', // sender address
                    to: profile[0].local.email, // list of receivers
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
            'local.email': req.query.email
        }, function(err, profile) {
            if (err) {
                res.send(err);
                console.log('error occured');
            } else {
                if (profile[0].local.verificationID != 0) {
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
            'local.verificationID': req.body.id
        }, function(err, profile) {
            if (err) {
                res.send(err);
                console.log('error occured');
            } else {
                console.log(req.protocol + ":/" + req.get('host') + ":" + ("http://" + host));
                if ((req.protocol + "://" + req.get('host')) == ("http://" + host)) {
                    console.log("Domain is matched. Information is from Authentic email");
                    console.log("req.body.id" + req.body.id);
                    console.log("verificationId" + profile[0].local.verificationID);
                    if (profile[0].local.verificationID != 0) {
                        console.log("email is verified");
                        RegisteredUser.update({
                            'local.verificationID': req.body.id
                        }, {
                            $set: {
                                'local.password': req.body.pass,
                                'local.verificationID': 0
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
            'local.email': req.body.email
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
                'local.email': request1
            }, {
                $set: {
                    'local.name': request2,
                    'local.firstname': request3,
                    'local.lastname': request4
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
                'local.email': request1
            }, {
                $set: {
                    'local.password': request2
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
        let email = req.user.local.email;
        console.log(email);
        RegisteredUser.find({
            'local.email': email
        }, function(err, profile) {
          console.log(profile)
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

    app.get('/auth/facebook', passport.authenticate('facebook', { session: false, scope : 'email' }),(req, res) =>
      {
            res.json(req.user);
      });

      // handle the callback after facebook has authenticated the user
          app.get('/auth/facebook/callback',
              passport.authenticate('facebook', {
                  failureRedirect : '/#/'
              }), (req, res) => {
                res.cookie('token', req.user.facebook.token);
                res.cookie('authType', req.user.facebook.authType);
                res.cookie('username',req.user.facebook.name);
                res.redirect('/#/clienthome');
              });

          app.get('/userProfile',function(req, res){
            console.log(req.user);
            res.json({user:req.user});
          });
    // *******************************************
    // Google authentication routes
    // *******************************************
    //  send to google to do the authentication
    app.get('/auth/google', passport.authenticate('google', { session: false, scope : [ 'email'] }),(req, res) =>
      {
            res.json(req.user);
      });

    // the callback after google has authorized the user
    app.get('/auth/google/callback',
              passport.authenticate('google', {
                  failureRedirect : '/#/'
              }), (req, res) => {
                res.cookie('token', req.user.google.token);
                res.cookie('username',req.user.google.name);
                res.cookie('authType', req.user.google.authType);
                res.redirect('/#/clienthome');
              });
};
