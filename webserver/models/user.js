// load the things we need
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const CONFIG = require('../config/auth');
// define the schema for our user model
const userSchema = mongoose.Schema({

    local: {
      name: String,
      email: String,
      password: String,
      type: String,
      firstname: String,
      lastname: String,
      loggedinStatus:Boolean,
      isEmailVerified: Boolean,
      verificationID: Number,
      joiningdate : { type : Date, default: new Date().toISOString() },
      token: String
    },
    facebook: {
        id: String,
        token: String,
        email: String,
        name: String
    },
    google: {
        id: String,
        token: String,
        email: String,
        name: String
    }

});

userSchema.statics.generateToken = function(email) {
    let token = jwt.sign({
        id: email
    }, CONFIG.JWT.secret, {
        expiresIn: 15 * 60
    });
    return token;
};

// create the model for users and expose it to our app
module.exports = mongoose.model('user', userSchema);
